import { useEffect, useState, useCallback } from 'react';
import { web3 } from '../web3';
import { AbiItem } from 'web3-utils';
import { Gold } from '../../types/abi/Gold';
import ContractGold from '../../contracts/Gold.json';
import { ADDRESS_ACOUNT0, ADDRESS_CONTRACT } from '../const/env';

const address = ADDRESS_CONTRACT;
const ABI = ContractGold.abi as any as AbiItem;

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

  const b = async () => {
    const contract = new web3.eth.Contract(ABI, address) as unknown as Gold;
    const addressAcounts0 = ADDRESS_ACOUNT0;
    console.log(await contract.methods.balanceOf(addressAcounts0).call());
  };

  useEffect(() => {
    console.log('OK');

    fetchAccount();
  }, [fetchAccount]);

  return {
    accounts,
  };
};
