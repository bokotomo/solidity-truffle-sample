import { useEffect, useState, useCallback } from 'react';
import { web3, contract } from '../web3';
import { ADDRESS_ACOUNT0 } from '../const/env';

interface UseReturn {
  readonly accounts: string[];
}
/**
 * データの取得
 */
export const useFetch = (): UseReturn => {
  const [accounts, setAccounts] = useState<string[]>([]);

  /**
   * アカウント一覧取得
   */
  const fetchAccount = useCallback(async () => {
    const accountsWeb3 = await web3.eth.getAccounts();
    setAccounts(accountsWeb3);
  }, []);

  const getBalance = useCallback(async () => {
    const addressAcounts0 = ADDRESS_ACOUNT0;
    console.log(await contract.methods.balanceOf(addressAcounts0).call());
  }, []);

  useEffect(() => {
    console.log('OK');

    fetchAccount();
    getBalance();
  }, [fetchAccount, getBalance]);

  return {
    accounts,
  };
};
