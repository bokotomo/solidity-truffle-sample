import { useEffect, useState, useCallback, useRef } from 'react';
import { web3 } from '../web3';

interface UseReturn {
  readonly accounts: string[];
}
/**
 * データの取得
 */
export const useFetchHome = (): UseReturn => {
  const noEffected = useRef(true);
  const [accounts, setAccounts] = useState<string[]>([]);

  /**
   * アカウント一覧取得
   */
  const fetchAccount = useCallback(async () => {
    const accountsWeb3 = await web3.eth.getAccounts();
    setAccounts(accountsWeb3);
  }, []);

  useEffect(() => {
    if (noEffected.current) {
      noEffected.current = false;
      return;
    }

    fetchAccount();
  }, [fetchAccount]);

  return {
    accounts,
  };
};
