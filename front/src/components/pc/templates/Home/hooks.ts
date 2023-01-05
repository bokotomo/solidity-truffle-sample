// import { useState } from 'react';
import { contract } from '../../../../modules/web3';
// import { ADDRESS_ACOUNT0 } from '../../../../modules/const/env';

interface MetaMaskError {
  readonly code: number;
  readonly message: string;
}

/** ChainId一覧 */
enum Chains {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Kovan = 42,
  PrivateChain = 1337,
  EthereumClassicMainnet = 61,
  Morden = 62,
}

interface UseReturn {
  // readonly canMetaMask: boolean;
  readonly onClick: () => Promise<void>;
  readonly onClickApprove: () => Promise<void>;
  readonly onClickLogin: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (): UseReturn => {
  // const [canMetaMask, setCanMetaMask] = useState<boolean>(false);
  /**
   * クリックされた
   */
  const onClick = async (): Promise<void> => {
    // const addressAcounts0 = ADDRESS_ACOUNT0;
    const tokenId = 0;
    const level = await contract.methods.levelOf(tokenId).call();
    console.log(level);
  };

  /**
   * 承認がクリックされた
   */
  const onClickApprove = async (): Promise<void> => {
    // const addressAcounts0 = ADDRESS_ACOUNT0;
    const tokenId = 0;
    const level = await contract.methods.levelOf(tokenId).call();
    console.log(level);
  };

  /**
   * ログインがクリックされた
   */
  const onClickLogin = async (): Promise<void> => {
    // メタマスクに接続可能か
    if (typeof window.ethereum !== 'undefined') {
      try {
        const acccounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];
        const acccount = acccounts.length > 0 ? acccounts[0] : '';
        console.log(acccount);

        const hexChainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string;
        const chainId = parseInt(hexChainId);
        console.log(Chains[chainId]);
      } catch (err: unknown) {
        const e = err as MetaMaskError;
        if (e.code === 4001) {
          alert('Please connect to MetaMask.');
        } else {
          console.error(e);
        }
      }
    }
  };

  return {
    onClick,
    onClickApprove,
    onClickLogin,
  };
};
