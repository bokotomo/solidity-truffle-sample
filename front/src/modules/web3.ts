import Web3 from 'web3';
import { CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';

const port = CHAIN_PORT;
const host = CHAIN_HOST;
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);
