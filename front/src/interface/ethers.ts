import { ethers } from 'ethers';
import { LevelItemMethods } from '../interface/abi/LevelItem';

export type Web3Provider = ethers.providers.Web3Provider;
export type Contract = LevelItemMethods;

/**
 * MetaMaskエラー
 */
export interface MetaMaskError {
  readonly code: number;
  readonly message: string;
  readonly data?: unknown;
}

/** ChainId一覧 */
// export enum Chains {
//   Mainnet = 1,
//   Ropsten = 3,
//   Rinkeby = 4,
//   Kovan = 42,
//   PrivateChain = 1337,
//   EthereumClassicMainnet = 61,
//   Morden = 62,
// }
