import React from 'react';

interface Props {
  readonly accounts: string[];
}

/**
 * Home
 */
const Home: React.FC<Props> = (p: Props) => {
  const onClick = async () => {
    console.log(p.accounts);
  };

  return (
    <div>
      <div>Accounts</div>
      <div>
        {p.accounts.map(account => (
          <div key={account}>{account}</div>
        ))}
      </div>

      <div onClick={onClick}>button</div>
    </div>
  );
};

export default Home;
