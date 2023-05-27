import CONFIG from "../../config";
import { getNftsByWallet } from "../../helper";

const { BACKEND_ERROR } = CONFIG

export const getEthNftsByAddress = async (req, res) => {
  try {
    const { wallet } = req.params;
    const result = await getNftsByWallet(wallet);
    return res.status(200).json(result);
  }
  catch (e) {
    console.log(e);
    return res.status(500).json(BACKEND_ERROR)
  }
}

export default { getEthNftsByAddress }