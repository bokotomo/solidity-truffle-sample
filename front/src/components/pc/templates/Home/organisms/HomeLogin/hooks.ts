import { ethers } from 'ethers';
import {
  Web3Provider,
  MetaMaskError,
} from '../../../../../../interface/ethers';

interface UseReturn {
  readonly onClickLogin: () => Promise<void>;
}
/**
 * Hooks: Login
 */
export const useHooks = (
  setProvider: (provider: Web3Provider) => Promise<void>
): UseReturn => {
  /**
   * プロバイダーをセットする
   */
  const setContractProvider = async (): Promise<void> => {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum as unknown as ethers.providers.ExternalProvider
    );

    await setProvider(provider);
  };

  /**
   * ログインエラー
   */
  const errorLogin = (e: MetaMaskError): void => {
    if (e.code === 4001) {
      alert('Please connect to MetaMask.');
    } else {
      console.error(e);
    }
  };

  /**
   * ログインがクリックされた
   */
  const onClickLogin = async (): Promise<void> => {
    // メタマスクに接続可能か
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // プロバイダーをセットする
        await setContractProvider();
      } catch (err: unknown) {
        const e = err as MetaMaskError;
        errorLogin(e);
      }
    }
  };

  return {
    onClickLogin,
  };
};
