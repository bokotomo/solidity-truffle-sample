// import { useState } from 'react';
import { contract } from '../../../../modules/web3';
// import { ADDRESS_ACOUNT0 } from '../../../../modules/const/env';

interface MetaMaskError {
  readonly code: number;
  readonly message: string;
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
        console.log(acccounts);
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
