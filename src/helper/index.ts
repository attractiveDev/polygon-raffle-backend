import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils'

// const chain = EvmChain.GOERLI;
const chain = EvmChain.MUMBAI;

export const getNftsByWallet = async (wallet: string) => {
  try {

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: wallet,
      chain,
    });

    return response.toJSON();
  }
  catch (error) {
    console.log('error', error);
    return null;
  }
}