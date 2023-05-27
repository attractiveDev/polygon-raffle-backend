import { model, Schema, models, Model } from 'mongoose';

export interface RewardNft {
  address: string,
  status: number
}

const RewardNft: Schema<RewardNft> = new Schema<RewardNft>({
  address: { type: String, unique: true },
  status: { type: Number, default: 0 }
})

const RewardNftModel: Model<RewardNft> = models['rewardNft'] || model<RewardNft>('reward_nfts', RewardNft)
export default RewardNftModel;
