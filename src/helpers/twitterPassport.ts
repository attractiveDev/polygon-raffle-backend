import passport from 'passport';
import User from '../models/user';
import TwitterStrategy from 'passport-twitter'
import socials from './cache';

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_API_KEY,
      consumerSecret: process.env.TWITTER_SECRET,
      passReqToCallback: true,
    },
    async function (req, accessToken, refreshToken, profile, done) {

      try {

        const userExist = await User.findOne({ twitterId: profile.id });

        const user = await User.findById(req.query.userid);

        if (!userExist || (userExist.walletAddress === user.walletAddress)) {

          user.twitterId = Number(profile.id);
          user.twitterName = profile.username;
          socials.userTwitterMap.set(user.walletAddress, profile.id);

          user.save();

          return done(null, { profile, user: req.user });

        } else {

          return done("Failed to register, A user with this twitter is registered");

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
