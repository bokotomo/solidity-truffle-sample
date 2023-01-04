import Web3 from 'web3';
import { ADDRESS_CONTRACT, CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';
import { AbiItem } from 'web3-utils';
import ContractGold from '../contracts/Gold.json';
import { Gold } from '../types/abi/Gold';

const port = CHAIN_PORT;
const host = CHAIN_HOST;
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);

const address = ADDRESS_CONTRACT;
const ABI = ContractGold.abi as any as AbiItem;
export const contract = new web3.eth.Contract(ABI, address) as unknown as Gold;
