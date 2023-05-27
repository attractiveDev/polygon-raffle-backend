import { model, Schema, models, Model } from 'mongoose';

export interface User {
  walletAddress: string,
  twitterId: number,
  twitterName: string,
  discordId: number,
  discordName: string
}

const User: Schema<User> = new Schema<User>(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true
    },
    twitterId: {
      type: Number,
      required: false,
    },
    twitterName: {
      type: String,
      required: false
    },
    discordId: {
      type: Number,
      required: false,
    },
    discordName: {
      type: String,
      required: false
    }
  }
);


const UserModel: Model<User> = models['user'] || model<User>('user', User);
export default UserModel;
