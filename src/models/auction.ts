import { model, Schema, models, Model } from 'mongoose';


export interface Auction {
  id: number | null,
  name: string | null,
  project: string | null,
  image: string | null,
  tokenAddress: string | null,
  tokenId: number | null,
  description: string | null,
  discord: string | null,
  twitter: string | null,
  price: number | null,
  start_date: number | null,
  end_date: number | null,
  walletAddress: string | null,
  type: string | null
}

const Auction: Schema<Auction> = new Schema<Auction>({
  id: { type: Number, required: true, unique: true },
  project: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String },
  tokenAddress: { type: String, required: true },
  tokenId: { type: Number, required: true },
  description: { type: String, required: true },
  discord: { type: String, required: true },
  twitter: { type: String, required: true },
  price: { type: Number, required: true },
  start_date: { type: Number, required: true },
  end_date: { type: Number, required: true },
  walletAddress: { type: String, required: true },
  type: { type: String, required: true }

})


const AuctionModel: Model<Auction> = models['auction'] || model<Auction>('auction', Auction);
export default AuctionModel;
