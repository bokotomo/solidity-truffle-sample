import { contract } from '../../../../modules/web3';
// import { ADDRESS_ACOUNT0 } from '../../../../modules/const/env';

interface UseReturn {
  readonly onClick: () => Promise<void>;
}
export const useHooks = (): UseReturn => {
  /**
   * クリックされた
   */
  const onClick = async (): Promise<void> => {
    // const addressAcounts0 = ADDRESS_ACOUNT0;
    const tokenId = 0;
    const level = await contract.methods.levelOf(tokenId).call();
    console.log(level);
  };

  return {
    onClick,
  };
};
