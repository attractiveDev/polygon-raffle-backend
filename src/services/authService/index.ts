import Web3 from 'web3'

const verify = async (address: string, signature: string): Promise<boolean> => {
  try {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://polygonraffle.herokuapp.com'));
    let original_message = 'Sign Message'

    let recoveredAddress = await web3.eth.accounts.recover(original_message, signature)
    return recoveredAddress.toUpperCase() === address.toUpperCase()
  }
  catch (err) {
    console.log(`wallet address validation err:`, err);
  }

  return false;
}
export default {
  verify
}