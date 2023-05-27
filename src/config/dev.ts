import ADMIN_KEYPAIR from './devnet.json';
import { IDL } from '../constants/idl/escrow';
import * as AUCTION_IDL from '../constants/idl/auction'
import * as RAFFLE_IDL from '../constants/idl/raffle'
import raffleAbi721 from '../constants/abi/RaffleErc721.json'
import raffleAbi1155 from '../constants/abi/RaffleErc1155.json'

export default {
  ADMIN: ADMIN_KEYPAIR,
  IDL: IDL,
  PROGRAM_ID: '3nYqaNUEhW4gwkNHanSPeTExTuerisrCU71EpxQm3W6N',
  ESCROW_SEEDS: 'escrow',
  CLUSTER_API: 'https://api.devnet.solana.com',
  ENV: 'dev',
  SIGN_KEY: 'VERIFY WALLET',

  AUCTION: {
    PROGRAM_ID: '4BEYDwX3YFR3fe5kVPcTi6eBVFLzxoXxxFMchcJrp3j5',
    POOL_SEED: 'pool',
    IDL: AUCTION_IDL.IDL,
    PAY_TOKEN_DECIMAL: 1000000000,
    message: 'Auction Message'
  },
  RAFFLE: {
    PROGRAM_ID: 'AfX4vC288HmK4UcjUo25FEvo7cdxBhNp6Pdoyjmdzw3h',
    POOL_SEED: 'pool',
    IDL: RAFFLE_IDL.IDL,
    PAY_TOKEN_DECIMAL: 1000000000,
    message: 'Raffle Message'
  },
  RPC: 'https://goerli.infura.io/v3/0f91cc85058741e1910dc423c59391fb',
  MORALIS_API_KEY: 'SxlGvC4i7dMygHzqGwESibtOC9swVewYaZVxyz2fcSxq9LVQeujmqYFIqNBtnWxt',
  BACKEND_ERROR: {
    success: false, message: 'Backend Server Error!', data: null
  },
  OWNER: '0x45b07A8080Ed16E7F43e2680542519b60B1c7F4f',
  OWNER_PVKEY: 'b4817b21fcd0c47b320c2c21aa981333e23698ad6ed9a50e57df680d4569cb10',
  RAFFLE_CONTRACT_721: `0xf95eb8849D670E4729DC995703956207A7889544`,
  RAFFLE_ABI_721: raffleAbi721,
  RAFFLE_CONTRACT_1155: `0x70A5C7f6A2E25360339C52c06576eAf2cEd89219`,
  RAFFLE_ABI_1155: raffleAbi1155,
  RPC_URL: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
  CHAIN_ID: 80001
}