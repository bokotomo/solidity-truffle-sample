import Web3 from 'web3';
import { ADDRESS_CONTRACT, CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';
import { AbiItem } from 'web3-utils';
import ContractLevelItem from '../contracts/LevelItem.json';
import { LevelItem } from '../types/abi/LevelItem';

const port = CHAIN_PORT;
const host = CHAIN_HOST;
/**
 * web3ライブラリ
 */
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);

const address = ADDRESS_CONTRACT;
const ABI = ContractLevelItem.abi as any as AbiItem;
/**
 * コントラクト: LevelItem
 */
export const contract = new web3.eth.Contract(
  ABI,
  address
) as unknown as LevelItem;
