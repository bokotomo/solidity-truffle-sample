import { useEffect, useState, useCallback, useRef } from 'react';
import { web3, contract } from '../web3';
import { ADDRESS_ACOUNT0 } from '../const/env';

interface UseReturn {
  readonly accounts: string[];
  readonly myAccount: string | undefined;
  readonly setMyAccount: (account: string) => void;
}
/**
 * データの取得
 */
export const useFetch = (): UseReturn => {
  const noEffected = useRef(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [myAccount, setMyAccountState] = useState<string | undefined>(
    undefined
  );

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
    const addressAcounts0 = ADDRESS_ACOUNT0;
    const b = await contract.methods.balanceOf(addressAcounts0).call();
    console.log(b);
  }, []);

  /**
   * アカウントをセット
   */
  const setMyAccount = (account: string) => setMyAccountState(account);

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
    setMyAccount,
  };
};
