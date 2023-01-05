import Web3 from 'web3';
import { ethers } from 'ethers';
import { CHAIN_HOST, CHAIN_PORT } from '../modules/const/env';
import ContractLevelItem from '../contracts/LevelItem.json';
// import { LevelItem } from '../interface/abi/LevelItem';

const port = CHAIN_PORT;
const host = CHAIN_HOST;
/**
 * web3ライブラリ
 */
export const web3 = new Web3(
  new Web3.providers.HttpProvider(`${host}:${port}`)
);

// const address = ADDRESS_CONTRACT;
export const ABI = ContractLevelItem.abi as unknown as ethers.ContractInterface;
// /**
//  * コントラクト: LevelItem
//  */
// export const contract = new web3.eth.Contract(
//   ABI,
//   address
// ) as unknown as LevelItem;
