import Web3 from 'web3'

export const verifyEthereum = (address, signature) => {
  let web3 = new Web3(new Web3.providers.HttpProvider('https://localhost:3000'));
  let original_message = 'Sign Message'

  let recoveredAddress = web3.eth.accounts.recover(original_message, signature)
  return recoveredAddress.toUpperCase() === address.toUpperCase()
}

