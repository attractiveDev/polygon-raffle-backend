import { model, Schema, models, Model } from 'mongoose';

export interface UserInfor {
  walletAddress: string,
  nftId: number,
  favouriteState: boolean
}

const UserInfor: Schema<UserInfor> = new Schema<UserInfor>(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true
    },
    nftId: {
      type: Number,
      required: false,
    },
    favouriteState: {
      type: Boolean,
      required: false
    }
  }
);


const UserModel: Model<UserInfor> = models['userInfor'] || model<UserInfor>('userInfor', UserInfor);
export default UserModel;
