import React, { useState } from 'react';
import { Contract } from '../../../../../../interface/ethers';

interface UseReturn {
  readonly onClick: () => Promise<void>;
  readonly onChangeMint: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onClickMint: () => Promise<void>;
  readonly onClickApprove: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (
  contractLevelItem: Contract | undefined
): UseReturn => {
  const [mintAddress, setMintAddress] = useState<string>('');

  /**
   * クリックされた
   */
  const onClick = async (): Promise<void> => {
    if (!contractLevelItem) return;
    const res = await contractLevelItem.ownerOf(0);
    alert(res);
  };

  /**
   * クリックされた
   */
  const onChangeMint = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMintAddress(String(e.target.value));
    console.log(e.target.value, mintAddress);
  };

  /**
   * クリックされた
   */
  const onClickMint = async (): Promise<void> => {
    if (!contractLevelItem) return;
    console.log(mintAddress);
    const tx: any = await contractLevelItem.mint(mintAddress);
    console.log('transaction: ', tx);
    // wait for the transaction to actually settle in the blockchain
    await tx.wait();
    console.log('done');
  };

  /**
   * 承認がクリックされた
   */
  const onClickApprove = async (): Promise<void> => {
    if (!contractLevelItem) return;
    const res = await contractLevelItem.levelOf(0);
    alert(res);
  };

  return {
    onClick,
    onChangeMint,
    onClickMint,
    onClickApprove,
  };
};
