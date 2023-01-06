import { useState } from 'react';
import { ethers } from 'ethers';
import { ADDRESS_CONTRACT } from '../const/env';
import { ABI } from '../../modules/web3';
import { Web3Provider, Contract } from '../../interface/ethers';

interface UseReturn {
  readonly myAccount: string | undefined;
  readonly providerEthers: Web3Provider | undefined;
  readonly contractLevelItem: Contract | undefined;
  readonly myTokenIds: number[];
  readonly setProvider: (provider: Web3Provider) => Promise<void>;
}
/**
 * データの取得
 */
export const useAdapterHome = (): UseReturn => {
  const [providerEthers, setProviderEthers] = useState<
    Web3Provider | undefined
  >(undefined);
  const [myAccount, setMyAccountState] = useState<string | undefined>(
    undefined
  );
  const [contractLevelItem, setContractLevelItem] = useState<
    Contract | undefined
  >(undefined);
  const [myTokenIds, setMyTokenIds] = useState<number[]>([]);

  /**
   * プロバイダーをセット
   */
  const setProvider = async (provider: Web3Provider): Promise<void> => {
    setProviderEthers(provider);

    // 現在のアカウントアドレスをセット
    const accounts = (await provider.send(
      'eth_requestAccounts',
      []
    )) as string[];
    const account = accounts.length > 0 ? accounts[0] : '';
    setMyAccountState(account);

    const signer = provider.getSigner();

    // コントラクトをセット
    const contract = new ethers.Contract(ADDRESS_CONTRACT, ABI, signer);
    setContractLevelItem(contract as unknown as Contract);

    interface OwnedTokensOf {
      readonly _hex: string;
    }
    const tokenHexIds = (await contract.ownedTokensOf(
      account
    )) as OwnedTokensOf[];
    const tokenIds = tokenHexIds.map(t => parseInt(t._hex, 16));
    setMyTokenIds(tokenIds);
  };

  return {
    myAccount,
    providerEthers,
    contractLevelItem,
    setProvider,
    myTokenIds,
  };
};
