import React from 'react';
import { web3 } from '../../../../modules/web3';

/**
 * Home
 */
const Home: React.FC = () => {
  const onClick = async () => {
    const accountsWeb3 = await web3.eth.getAccounts();
    console.log(accountsWeb3);
  };

  return <div onClick={onClick}>button</div>;
};

export default Home;
