import { model, Schema, models, Model } from 'mongoose';

export interface Raffle {
  id: number | null,
  name: string | null,
  tokenAddress: string | null,
  tokenId: number | null,
  project: string | null,
  image: string | null,
  description: string | null,
  discord: string | null,
  twitter: string | null,
  price: number | null,
  total_tickets: number | null,
  start_date: number | null,
  end_date: number | null,
  state: number | null,
  walletAddress: string | null,
  type: string | null,
  favourite: boolean | null,
  follow: boolean | null,
}

const Raffle: Schema<Raffle> = new Schema<Raffle>({
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  tokenAddress: { type: String, required: true },
  tokenId: { type: Number, required: true },
  project: { type: String },
  image: { type: String, required: true },
  description: { type: String, required: true },
  discord: { type: String, required: true },
  twitter: { type: String, required: true },
  price: { type: Number, required: true },
  total_tickets: { type: Number, required: false },
  start_date: { type: Number, required: true },
  end_date: { type: Number, required: true },
  state: { type: Number, default: 0 },
  walletAddress: { type: String, required: true },
  type: { type: String, required: true },
  favourite: { type: Boolean } ,
  follow: { type: Boolean },
})


const RaffleModel: Model<Raffle> = models['raffle'] || model<Raffle>('raffle', Raffle);
export default RaffleModel;
