/** コントラクトのアドレス */
export const ADDRESS_CONTRACT = String(
  process.env.REACT_APP_ADDRESS_CONTRACT || ''
);

/** アカウントのアドレス */
export const ADDRESS_ACOUNT0 = String(
  process.env.REACT_APP_ADDRESS_ACOUNT0 || ''
);

/** ポート番号 */
export const CHAIN_PORT = Number(process.env.REACT_APP_CHAIN_PORT || 0);

/** ホストURI */
export const CHAIN_HOST = String(process.env.REACT_APP_CHAIN_HOST || '');
