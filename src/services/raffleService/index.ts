import { ObjectId } from 'mongoose';
// import fetch from 'node-fetch';
import RaffleModel from '../../models/raffle';
import { Raffle } from '../../models/raffle';

import { ethers, Contract, providers } from 'ethers';
import CONFIG from '../../config';

const getRaffles = async () => {

  try {
    const raffles = await RaffleModel.find();
    return raffles;
  }
  catch (error) {
    return null;
  }
}

const getRaffleRank = async (tokenAddress, tokenId) => {
  try{
    const apiUrl = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&asset_contract_address=${tokenAddress}&token_ids=${tokenId}`;
    const response = await fetch(apiUrl);
    console.log("response", response);
    const data = await response.json();
    console.log("response-rank", data);
    return data;
  }catch(error){
    return null;
  }
}

const getRaffleByUser = async (walletAddress: string) => {
  try{
    const raffle = await RaffleModel.findOne({walletAddress: walletAddress});
    if(!raffle) return "not found"
  }catch(error){
    console.log("error", error);
    return null;
  }
}

const getRaffle = async (id: Raffle) => {
  try {
    const raffle = await RaffleModel.findById(id);
    return raffle;
  }
  catch (error) {
    return null;
  }
}



const createRaffle = async (data: Raffle) => {
  console.log("create-data", data)
  try {
    const id = Date.now();

    // const result = await RaffleContract.createRaffle(
    //   id,
    //   tokenAddress,
    //   tokenId,
    //   start_date,
    //   end_date,
    //   total_tickets,
    //   price
    // );
    // console.log('result', result);
    // if (!result) return null;

    const raffle = new RaffleModel({
      id,
      ...data,
      favourite: false,
      follow: false
    });
    await raffle.save();
    return raffle;
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}

const updateRaffle = async (id: ObjectId, data: Raffle) => {
  try {
    const { start_date, end_date, total_tickets, price } = data;
    let raffle = await RaffleModel.findById(id);
    if (!raffle) return null;

    // const result = await RaffleContract.editRaffle(
    //   raffle.id,
    //   new PublicKey(raffle.mint),
    //   start_date,
    //   end_date,
    //   total_tickets,
    //   price
    // );
    // if (!result) return null;

    Object.keys(data).map(key => {
      raffle[key] = data[key];
    })
    await raffle.save();
    return raffle;
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}

const updateUserFavourite = async (id: ObjectId, favourite: boolean) => {
  try{
    let raffle = await RaffleModel.findById(id);
    raffle["favourite"] = favourite;
    await raffle.save();
    return raffle
  }catch(error){
    console.log("error", error);
    return null;
  }
}

const updateUserFollow = async (id: ObjectId, follow: boolean) => {
  try{
    let raffle = await RaffleModel.findById(id);
    raffle["follow"] = follow;
    await raffle.save();
    return raffle
  }catch(error){
    console.log("error", error);
  }
}

const deleteRaffle = async (id: ObjectId) => {
  try {
    const raffle = await RaffleModel.findById(id);
    if (!raffle) return false;

    // const result = await RaffleContract.deleteRaffle(
    //   raffle.id,
    //   new PublicKey(raffle.mint)
    // );
    // if (!result) return false;

    await raffle.remove();
    return true;
  }
  catch (error) {
    console.log('error', error);
    return false;
  }
}

const getFinishRaffle = async (id: number, data: any) => {
  try {
    const { tokenAddress, tokenId, itemId } = data
    let raffle = await RaffleModel.findById(id);
    if (raffle.state === 0) {
      const ethProvider: any = new providers.JsonRpcProvider(CONFIG.RPC_URL)
      const signer = new ethers.Wallet(CONFIG.OWNER_PVKEY, ethProvider);

      const raffleContract = new Contract(CONFIG.RAFFLE_CONTRACT_721, CONFIG.RAFFLE_ABI_721, signer);

      const completeRaffleTx = await raffleContract.completeRaffle(itemId)

      await completeRaffleTx.wait()

      if (completeRaffleTx) {
        raffle.state = 1
        raffle.save()

        const fetch_lists = await raffleContract.fetchRaffleItems()

        const get_winner = fetch_lists.find((item: any) => item.tokenId.toNumber() === tokenId && item.nftContract.toLowerCase() === tokenAddress.toLowerCase())

        return { status: true, winner: get_winner.winner }
      }

    }

  } catch (error) {
    console.log('error', error)
    return false
  }
}

const getFinishRaffle1155 = async (id: number, data: any) => {
  try {
    const { tokenAddress, tokenId, itemId } = data
    let raffle = await RaffleModel.findById(id);
    console.log('raffle', raffle)
    console.log('tokenAddress', tokenAddress)
    console.log('tokenId', tokenId)
    console.log('itemId', itemId)
    if (raffle.state === 0) {
      console.log('Good')
      const ethProvider: any = new providers.JsonRpcProvider(CONFIG.RPC_URL)
      const signer = new ethers.Wallet(CONFIG.OWNER_PVKEY, ethProvider);

      const raffleContract = new Contract(CONFIG.RAFFLE_CONTRACT_1155, CONFIG.RAFFLE_ABI_1155, signer);

      const completeRaffleTx = await raffleContract.completeRaffle(itemId)

      await completeRaffleTx.wait()

      console.log('completeRaffleTx', completeRaffleTx)
      if (completeRaffleTx) {
        raffle.state = 1
        raffle.save()

        const fetch_lists = await raffleContract.fetchRaffleItems()
        console.log('fetch_lists', fetch_lists)

        const get_winner = fetch_lists.find((item: any) => item.tokenId.toNumber() === tokenId && item.nftContract.toLowerCase() === tokenAddress.toLowerCase())
        console.log('get_winner', get_winner)

        return { status: true, winner: get_winner.winner.toLowerCase() }
      }

    }

  } catch (error) {
    console.log('error', error)
    return false
  }
}


export default {
  getRaffles,
  getRaffleRank,
  getRaffleByUser,
  updateUserFavourite,
  updateUserFollow,
  getRaffle,
  createRaffle,
  updateRaffle,
  deleteRaffle,
  getFinishRaffle,
  getFinishRaffle1155
}