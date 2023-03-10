import { useEffect, useCallback, useRef } from 'react';

/**
 * データの取得
 */
export const useEventHome = (): void => {
  const noEffected = useRef(true);

  /**
   * MetaMask: アカウント変更された
   */
  const onAccountsChanged = useCallback((accountNo: string): void => {
    console.log(accountNo);
    alert('onAccountsChanged');

    // ただの検証なのでリロードしてしまう
    window.location.reload();
  }, []);

  /**
   * MetaMask: チェーン変更された
   */
  const onChainChanged = useCallback((id: string): void => {
    console.log(parseInt(id));
    alert('onChainChanged');

    // ただの検証なのでリロードしてしまう
    window.location.reload();
  }, []);

  useEffect(() => {
    if (noEffected.current) {
      noEffected.current = false;
      return;
    }

    // メタマスクに接続可能か
    if (typeof window.ethereum !== 'undefined') {
      // イベント
      window.ethereum.on('accountsChanged', accountNo =>
        onAccountsChanged(accountNo as string)
      );
      // イベント
      window.ethereum.on('chainChanged', accountNo =>
        onChainChanged(accountNo as string)
      );
    }
  }, [onAccountsChanged, onChainChanged]);
};
