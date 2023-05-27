import User from '../../models/user'
import  UserInfor  from '../../models/userInfor';
import socials from '../../helpers/cache';
import { generateToken } from '../../helpers/TokenService';
import { verifyEthereum } from '../../helpers/utils/verify'
import authService from '../authService';

const getUser = async (wallet: string) => {
  try {
    const user = await User.findOne({
      walletAddress: wallet,
    });
    return user;
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}


const createUser = async (data: any) => {
  try {
    const { wallet, signedMessage } = data;
    const user = await User.findOne({
      walletAddress: wallet,
    });
    console.log('user', user)

    if (user) {
      const token = await generateToken(wallet);
      return token;
    } else {
      const verified = await authService.verify(wallet, signedMessage);
      console.log('verified', wallet, signedMessage, verified);
      if (!verified) return null;
      // if (!verifyEthereum(wallet, signedMessage)) {
      //   // return res.status(422).json({ msg: 'Ethereum Verification failed' })
      //   console.log('Verified Fail')
      //   return 'Verification failed'
      // }
      const saveUser = new User({
        walletAddress: wallet,
      });

      const savedUser = await saveUser.save();
      if (savedUser) {
        const token = await generateToken(wallet);
        return token;
      }
    }
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}

const checkDiscordStatus = async (wallet: string) => {
  try {
    if (socials.userDiscordMap.get(wallet)) {

      const user = await User.findOne({ walletAddress: wallet });

      if (!user.discordId) {
        return null;
      }

      return user.discordName;
    }
    else {
      const user = await User.findOne({ walletAddress: wallet });
      if (user.discordId) {
        return user.discordName
      }
    }
  }
  catch (error) {
    console.log('error', error);
  }
  return null;
};

const checkTwitterStatus = async (wallet: string) => {
  try {
    if (socials.userTwitterMap.get(wallet)) {
      const user = await User.findOne({ walletAddress: wallet });

      if (!user.twitterId) return null;
      return user.twitterName;
    }
    else {
      const user = await User.findOne({ walletAddress: wallet });
      if (user.twitterId) {
        return user.twitterName;
      }
    }

    return null;
  }
  catch (error) {
    console.log('error', error);
    return null;
  }

}


const disconnectSocial = async (wallet: string, social: string) => {
  try {
    const user = await User.findOne({ walletAddress: wallet });
    if (!user) return null;
    if (social === "twitter") {
      user.twitterId = null
      user.twitterName = null

    } else if (social === "discord") {
      user.discordId = null
      user.discordName = null
    } else {
      return true;
    }

    await user.save()

    return true;
  }
  catch (error) {
    console.log('error', error);
  }
  return false;
}

export default {
  getUser,
  createUser,
  checkDiscordStatus,
  checkTwitterStatus,
  disconnectSocial
}