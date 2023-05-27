import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import Moralis from 'moralis';
import routes from './routes';
import CONFIG from './config'
import { createProxyMiddleware } from 'http-proxy-middleware'

require('./helpers/discordPassport');
require('./helpers/twitterPassport');

import { setWinner } from './helpers/contract/raffle';
import { delay } from './helpers/utils'
import RaffleModel from './models/raffle';

dotenv.config();
mongoose.connect(
  process.env.MONGO_URI).then(
    () => console.log("Database Connected"))
  .catch(() => console.log("Database Connection Failed")
  )

const { MORALIS_API_KEY, CHAIN_ID } = CONFIG

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/build`))
app.use(express.static(`${__dirname}/uploads`))

app.use('/api', routes);
app.use('/api', createProxyMiddleware({
  target: 'https://api.opensea.io',
  changeOrigin: true
}))
app.use('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
})

const port = process.env.PORT;
try {
  Moralis.start({
    apiKey: MORALIS_API_KEY,
    defaultEvmApiChain: CHAIN_ID
  })
}
catch (error) {
  console.log('error', error);
}

app.listen(port, () => {
  console.info(`server started on port ${port}`)
})


const checkRaffles = async () => {
  try {
    const currentTime = Math.floor(Date.now() / 1000);
    const raffles = await RaffleModel.find({ state: 0 });
    for (let i = 0; i < raffles.length; i++) {
      let raffle = raffles[i];
      if (currentTime > raffle.end_date) {
        console.log('ended')
        const res = await setWinner(raffle.tokenAddress, raffle.tokenId);
        console.log('res', res);
        if (res) {
          console.log('Success')
          raffle.state = 1;
          await raffle.save();
        }
      }
    }
  }
  catch (error) {
    console.log('error', error);
  }
}


(async () => {
  for (let i = 0; i < 1;) {
    await checkRaffles();
    await delay(10 * 1000)
  }
})()