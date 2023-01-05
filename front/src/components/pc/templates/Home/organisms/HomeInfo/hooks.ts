import { contract } from '../../../../../../modules/web3';

interface UseReturn {
  // readonly canMetaMask: boolean;
  readonly onClick: () => Promise<void>;
  readonly onClickApprove: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (): UseReturn => {
  /**
   * クリックされた
   */
  const onClick = async (): Promise<void> => {
    const tokenId = 0;
    const level = await contract.methods.levelOf(tokenId).call();
    console.log(level);
  };

  /**
   * 承認がクリックされた
   */
  const onClickApprove = async (): Promise<void> => {
    const tokenId = 0;
    const level = await contract.methods.levelOf(tokenId).call();
    console.log(level);
  };

  return {
    onClick,
    onClickApprove,
  };
};
