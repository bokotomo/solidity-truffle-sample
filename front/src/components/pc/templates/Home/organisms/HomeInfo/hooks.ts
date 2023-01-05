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
  const onClick = async (): Promise<void> => {};

  /**
   * 承認がクリックされた
   */
  const onClickApprove = async (): Promise<void> => {};

  return {
    onClick,
    onClickApprove,
  };
};
