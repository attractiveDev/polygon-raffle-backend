import passport from 'passport';
import { Router } from 'express';
import { isAuthenticated } from '../../middlewares';

const router = Router()

router.get(
  '/discord/callback',
  passport.authenticate('discord', {
    failureRedirect: '/error',
  }),
  function (req, res) {
    res.send('<script>window.close()</script>');
  }
);

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/error',
  }),
  function (req, res) {
    res.send('<script>window.close()</script>');
  }
);


router.use(isAuthenticated);

router.get('/discord', (req: any, res: any, next) => {
  passport.authenticate('discord', {
    state: JSON.stringify({ userid: req.user._id }),
  })(req, res, next);
});

router.get('/twitter', (req: any, res: any, next) => {
  passport.authenticate('twitter', {
    state: JSON.stringify({ userid: req.user._id }),
  })(req, res, next);
});


export default router;