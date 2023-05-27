import { ethers, Contract, providers } from 'ethers';

import CONFIG from '../../config'

declare global {
  interface Window {
    ethereum?: any
  }
}

export const setWinner = async (
  tokenAddress: any,
  tokenId: any
): Promise<Boolean> => {

  try {
    console.log(tokenAddress, tokenId)

    const ethProvider: any = new providers.JsonRpcProvider(CONFIG.RPC_URL)
    const signer = new ethers.Wallet(CONFIG.OWNER_PVKEY, ethProvider);

    const raffleContract = new Contract(CONFIG.RAFFLE_CONTRACT_721, CONFIG.RAFFLE_ABI_721, signer);

    const fetch_lists = await raffleContract.fetchRaffleItems()

    const itemId = fetch_lists.findIndex((item: any) => item.tokenId.toNumber() === tokenId && item.nftContract.toLowerCase() === tokenAddress.toLowerCase())
    console.log('itemId', itemId)
    
    const completeRaffleTx = await raffleContract.completeRaffle(itemId + 1)
    console.log('completeRaffleTx', completeRaffleTx)
    if (completeRaffleTx) {
      return true
    }
  }
  catch (error) {
    console.log('error', error);
    return false
  }
};