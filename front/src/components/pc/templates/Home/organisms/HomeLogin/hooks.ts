import { ethers } from 'ethers';
import { Web3Provider } from '../../../../../../interface/ethers';

interface MetaMaskError {
  readonly code: number;
  readonly message: string;
  readonly data?: unknown;
}

/** ChainId一覧 */
// enum Chains {
//   Mainnet = 1,
//   Ropsten = 3,
//   Rinkeby = 4,
//   Kovan = 42,
//   PrivateChain = 1337,
//   EthereumClassicMainnet = 61,
//   Morden = 62,
// }

interface UseReturn {
  readonly onClickLogin: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (
  setMyAccount: (account: string) => void,
  setProvider: (provider: Web3Provider) => void
): UseReturn => {
  /**
   * プロバイダーをセットする
   */
  const setContractProvider = async (): Promise<void> => {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum as unknown as ethers.providers.ExternalProvider
    );

    setProvider(provider);
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
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[];

        const account = accounts.length > 0 ? accounts[0] : '';
        setMyAccount(account);

        // プロバイダーをセットする
        await setContractProvider();

        // const hexChainId = (await window.ethereum.request({
        //   method: 'eth_chainId',
        // })) as string;
        // const chainId = parseInt(hexChainId);
        // const chainName = Chains[chainId];
        // console.log(chainName);
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
