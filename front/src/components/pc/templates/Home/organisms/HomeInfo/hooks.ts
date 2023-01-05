import { Contract } from '../../../../../../interface/ethers';

interface UseReturn {
  readonly onClick: () => Promise<void>;
  readonly onClickApprove: () => Promise<void>;
}
/**
 * Hooks: Home
 */
export const useHooks = (
  contractLevelItem: Contract | undefined
): UseReturn => {
  /**
   * クリックされた
   */
  const onClick = async (): Promise<void> => {
    if (!contractLevelItem) return;
    const res = await contractLevelItem.ownerOf(0);
    alert(res);
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
    onClickApprove,
  };
};
