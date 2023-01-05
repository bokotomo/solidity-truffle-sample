import Web3 from 'web3';
import { ethers } from 'ethers';
import { CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';
import ContractLevelItem from '../contracts/LevelItem.json';

const port = CHAIN_PORT;
const host = CHAIN_HOST;
/**
 * web3ライブラリ
 */
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);

export const ABI = ContractLevelItem.abi as unknown as ethers.ContractInterface;
