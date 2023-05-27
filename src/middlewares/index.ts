import jwt from "jsonwebtoken";
import User from "../models/user";

export const isAuthenticated = async (req, res, next) => {
  try {
    if ((req.headers && req.headers.authorization) || req.query.token) {
      const token = req.query.token
        ? req.query.token
        : req.headers.authorization.split(' ')[1];
      const decodedData: any = jwt.verify(token, process.env.JWTSECRET);
      const user = await User.findOne({
        walletAddress: decodedData.walletAddress,
      });
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: 'Invalid token' });
      }
    } else {
      res.status(401).json({ message: 'Please try after login' });
    }
  } catch (error) {
    console.log(error.name);
    console.log(error);
    res.status(401).json({ message: 'Please try after login' });
  }
};
