import { ethers } from 'ethers';
import Web3 from 'web3';
import ContractLevelItem from '../contracts/LevelItem.json';
import { CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';

const port = CHAIN_PORT;
const host = CHAIN_HOST;

/**
 * web3ライブラリ
 */
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);

/**
 * ABIファイル
 */
export const ABI = ContractLevelItem.abi as unknown as ethers.ContractInterface;
