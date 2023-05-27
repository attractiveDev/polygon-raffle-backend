import passport from 'passport';
import User from '../models/user';
import socials from './cache';
const DiscordStrategy = require('passport-discord').Strategy;
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      passReqToCallback: true,

      scope: ['identify', 'guilds'],
    },
    async function (req, accessToken, refreshToken, profile, done) {

      try {

        const userid = JSON.parse(req.query.state).userid;

        const userExist = await User.findOne({ discordId: profile.id });

        const user = await User.findById(userid);

        if (!userExist || (userExist.walletAddress === user.walletAddress)) {

          // console.log(profile)
          user.discordId = profile.id;
          user.discordName = profile.username + '#' + profile.discriminator;
          socials.userDiscordMap.set(user.walletAddress, profile.id);
          user.save();

          return done(null, { profile, user: req.user });

        } else {

          return done("Failed to register, A user with this discord is registered");

        }

      } catch (e) {

        return done(e)

      }

    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default passport;
