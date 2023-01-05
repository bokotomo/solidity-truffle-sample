import { useEffect, useState, useCallback, useRef } from 'react';
import { ethers } from 'ethers';
import { web3 } from '../web3';
import { ADDRESS_CONTRACT } from '../const/env';
import { ABI } from '../../modules/web3';
import { Web3Provider, Contract } from '../../interface/ethers';

interface UseReturn {
  readonly accounts: string[];
  readonly myAccount: string | undefined;
  readonly providerEthers: Web3Provider | undefined;
  readonly contractLevelItem: Contract | undefined;
  readonly setMyAccount: (account: string) => void;
  readonly setProvider: (provider: Web3Provider) => void;
}
/**
 * データの取得
 */
export const useFetch = (): UseReturn => {
  const noEffected = useRef(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [providerEthers, setProviderEthers] = useState<
    Web3Provider | undefined
  >(undefined);
  const [myAccount, setMyAccountState] = useState<string | undefined>(
    undefined
  );
  const [contractLevelItem, setContractLevelItem] = useState<
    Contract | undefined
  >(undefined);

  /**
   * アカウント一覧取得
   */
  const fetchAccount = useCallback(async () => {
    const accountsWeb3 = await web3.eth.getAccounts();
    setAccounts(accountsWeb3);
  }, []);

  /**
   * テスト
   */
  const getBalance = useCallback(async () => {
    // const addressAcounts0 = ADDRESS_ACOUNT0;
    // const b = await contract.methods.balanceOf(addressAcounts0).call();
    console.log('OK');
  }, []);

  /**
   * アカウントをセット
   */
  const setMyAccount = (account: string) => setMyAccountState(account);

  /**
   * プロバイダーをセット
   */
  const setProvider = (provider: Web3Provider) => {
    setProviderEthers(provider);

    // コントラクトをセット
    const contract = new ethers.Contract(ADDRESS_CONTRACT, ABI, provider);
    setContractLevelItem(contract);
  };

  useEffect(() => {
    if (noEffected.current) {
      noEffected.current = false;
      return;
    }

    fetchAccount();
    getBalance();
  }, [fetchAccount, getBalance]);

  return {
    accounts,
    myAccount,
    providerEthers,
    contractLevelItem,
    setMyAccount,
    setProvider,
  };
};
