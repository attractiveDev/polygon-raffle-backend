import userService from "../../services/userService"

const getUser = async (req, res) => {
  const { wallet } = req.params;

  const result = await userService.getUser(wallet);
  return res.json(result);
}


const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  return res.json(result);
}

const checkDiscordStatus = async (req, res) => {
  const { wallet } = req.params;

  const result = await userService.checkDiscordStatus(wallet);
  return res.json(result);
}

const checkTwitterStatus = async (req, res) => {
  const { wallet } = req.params;

  const result = await userService.checkTwitterStatus(wallet);
  return res.json(result);
}

const disconnectSocial = async (req, res) => {
  const { wallet, social } = req.params;

  const result = await userService.disconnectSocial(wallet, social);
  return res.json(result);
}


export default {
  getUser,
  createUser,
  checkDiscordStatus,
  checkTwitterStatus,
  disconnectSocial
}