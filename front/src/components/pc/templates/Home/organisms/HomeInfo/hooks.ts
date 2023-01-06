import React, { useState } from 'react';
import { Contract } from '../../../../../../interface/ethers';

interface UseReturn {
  readonly onChangeMint: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onChangeTransferFrom: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly onChangeTransferTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onChangeTransferTokenId: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly onClickMint: () => Promise<void>;
  readonly onClickTransfer: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (
  contractLevelItem: Contract | undefined
): UseReturn => {
  const [mintAddress, setMintAddress] = useState<string>('');
  const [transferFromAddress, setTransferFromAddress] = useState<string>('');
  const [transferToAddress, setTransferToAddress] = useState<string>('');
  const [transferTokenId, setTransferTokenId] = useState<string>('');

  /**
   * inputされた: Mint
   */
  const onChangeMint = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMintAddress(String(e.target.value));
  };

  /**
   * クリックされた: Mint
   */
  const onClickMint = async (): Promise<void> => {
    if (!contractLevelItem || !mintAddress) {
      alert('no');
      return;
    }
    const tx = (await contractLevelItem.mint(mintAddress)) as unknown as {
      readonly wait: () => void;
    };
    console.log('Transaction: ', tx);
    await tx.wait();
    setMintAddress('');
    alert('done mint');
  };

  /**
   * inputされた: Transfer From
   */
  const onChangeTransferFrom = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTransferFromAddress(String(e.target.value));
  };

  /**
   * inputされた: Transfer To
   */
  const onChangeTransferTo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTransferToAddress(String(e.target.value));
  };

  /**
   * inputされた: Transfer TokenId
   */
  const onChangeTransferTokenId = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTransferTokenId(String(e.target.value));
  };

  /**
   * クリックされた: Transfer
   */
  const onClickTransfer = async (): Promise<void> => {
    if (!transferFromAddress || !transferToAddress || !transferTokenId) {
      alert('no');
      return;
    }
    const id = Number(transferTokenId);
    if (!contractLevelItem) return;

    console.log(transferFromAddress, transferToAddress, id);
    const tx = (await contractLevelItem.transferFrom(
      transferFromAddress,
      transferToAddress,
      id
    )) as unknown as {
      readonly wait: () => void;
    };
    console.log('Transaction: ', tx);
    await tx.wait();

    setTransferFromAddress('');
    setTransferToAddress('');
    setTransferTokenId('');
    alert('done transfer');
  };

  return {
    onChangeMint,
    onChangeTransferFrom,
    onChangeTransferTo,
    onChangeTransferTokenId,
    onClickMint,
    onClickTransfer,
  };
};
