import React from 'react';
import { useHooks } from './hooks';

interface Props {
  readonly accounts: string[];
}

/**
 * Home
 */
const Home: React.FC<Props> = (p: Props) => {
  const { onClick, onClickApprove } = useHooks();

  return (
    <div>
      <div>Accounts</div>

      <div>
        {p.accounts.map(account => (
          <div key={account}>{account}</div>
        ))}
      </div>

      <div>Level</div>
      <div onClick={onClick}>button</div>

      <div>approve</div>
      <div onClick={onClickApprove}>button</div>
    </div>
  );
};

export default Home;
