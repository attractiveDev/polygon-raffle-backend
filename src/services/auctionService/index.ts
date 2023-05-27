import { ObjectId } from 'mongoose';
import AuctionModel from '../../models/auction';
import { Auction } from '../../models/auction';

const getAuctions = async () => {
  try {
    const auctions = await AuctionModel.find();
    return auctions;
  }
  catch (error) {
    return null;
  }
}

const getAuction = async (id: ObjectId) => {
  try {
    const auction = await AuctionModel.findById(id);
    return auction;
  }
  catch (error) {
    return null;
  }
}

const createAuction = async (data: Auction) => {
  try {
    // console.log('data', data);
    // const { mint, start_date, end_date, min_bid_amount} = data;
    // const id = Date.now();
    // const result = await AuctionContract.createAuction(
    //   id,
    //   new PublicKey(mint),
    //   start_date,
    //   end_date,
    //   min_bid_amount
    // );
    // console.log('result', result);
    // if (!result) return null;
    const id = Date.now();
    const auction = new AuctionModel({
      id,
      ...data
    });
    await auction.save();
    return auction;
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}

const updateAuction = async (id: ObjectId, data: Auction) => {
  try {
    const { start_date, end_date, price } = data;
    console.log('update auction', id);
    let auction = await AuctionModel.findById(id);
    if (!auction) return null;

    // const result = await AuctionContract.editAuction(
    //   auction.id,
    //   new PublicKey(auction.mint),
    //   start_date,
    //   end_date,
    //   price
    // );
    // if (!result) return null;

    Object.keys(data).map(key => {
      auction[key] = data[key];
    })
    await auction.save();
    return auction;
  }
  catch (error) {
    return null;
  }
}

const deleteAuction = async (id: ObjectId) => {
  try {
    const auction = await AuctionModel.findById(id);
    if (!auction) return false;

    console.log('delete auction', auction);
    // const result = await AuctionContract.deleteAuction(
    //   auction.id,
    //   new PublicKey(auction.mint)
    // );
    // if (!result) return false;
    await auction.remove();
    return true;

  }
  catch (error) {
    console.log('error', error);
    return false;
  }
}

export default {
  getAuctions,
  getAuction,
  createAuction,
  updateAuction,
  deleteAuction
}