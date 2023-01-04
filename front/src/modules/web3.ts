import Web3 from 'web3';

const port = 7545;
const host = 'http://127.0.0.1';
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);
