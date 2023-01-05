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
  readonly onClickLogin: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (
  setMyAccount: (account: string) => void
): UseReturn => {
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
        console.log(accounts);
        const account = accounts.length > 0 ? accounts[0] : '';
        setMyAccount(account);

        const hexChainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string;
        const chainId = parseInt(hexChainId);
        const chainName = Chains[chainId];
        console.log(chainName);
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
    onClickLogin,
  };
};
