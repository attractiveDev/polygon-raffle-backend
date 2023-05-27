import raffleService from '../../services/raffleService';

const getRaffles = async (req, res) => {
  const result = await raffleService.getRaffles();
  return res.json(result);
}

const getRaffleByUser = async (req, res) => {
  const { walletAddress } = req.params;
  console.log("backend-walletAddress", walletAddress)
  const result = await raffleService.getRaffleByUser(walletAddress);
  return res.json(result);
}

const getRaffleRank = async (req, res) => {
  const { tokenAddress, id } = req.params;
  const result = await raffleService.getRaffleRank(tokenAddress, id);
  return res.json(result);
}

const getRaffle = async (req, res) => {
  const { id } = req.params;
  const result = await raffleService.getRaffle(id);
  return res.json(result);
}

const createRaffle = async (req, res) => {
  console.log("backend-create-raffle", req.body);
  const result = await raffleService.createRaffle(req.body);
  return res.json(result);
}

const updateRaffle = async (req, res) => {
  const { id } = req.params;
  const result = await raffleService.updateRaffle(id, req.body)
  return res.json(result);
}

const updateUserFavourite =async (req, res) => {
  const { id, favourite } = req.body;
  const result = await raffleService.updateUserFavourite(id, favourite);
  return res.json(result);
}

const updateUserFollow = async (req, res) => {
  const { id, follow } = req.body;
  const result = await raffleService.updateUserFollow(id, follow);
  return res.json(result);
}

const deleteRaffle = async (req, res) => {
  const { id } = req.params;
  const result = await raffleService.deleteRaffle(id);
  return res.json(result);
}

const getFinishRaffle = async (req, res) => {
  const { id } = req.params;
  const result = await raffleService.getFinishRaffle(id, req.body);
  console.log('result', result)
  return res.json(result);
}

const getFinishRaffle1155 = async (req, res) => {
  const { id } = req.params;
  const result = await raffleService.getFinishRaffle1155(id, req.body);
  console.log('result', result)
  return res.json(result);
}

export default {
  getRaffles,
  getRaffleRank,
  updateUserFavourite,
  getRaffleByUser,
  updateUserFollow,
  getRaffle,
  createRaffle,
  updateRaffle,
  deleteRaffle,
  getFinishRaffle,
  getFinishRaffle1155
}