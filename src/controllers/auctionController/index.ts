import auctionService from '../../services/auctionService';

const getAuctions = async (req, res) => {
  const result = await auctionService.getAuctions();
  return res.json(result);
}

const getAuction = async (req, res) => {
  const { id } = req.params;
  const result = await auctionService.getAuction(id);
  return res.json(result);
}

const createAuction = async (req, res) => {
  const result = await auctionService.createAuction(req.body);
  return res.json(result);
}

const updateAuction = async (req, res) => {
  const { id } = req.params;
  const result = await auctionService.updateAuction(id, req.body);
  return res.json(result);
}

const deleteAuction = async (req, res) => {
  const { id } = req.params;
  const result = await auctionService.deleteAuction(id);
  return res.json(result);
}

export default {
  getAuctions,
  getAuction,
  createAuction,
  updateAuction,
  deleteAuction
}