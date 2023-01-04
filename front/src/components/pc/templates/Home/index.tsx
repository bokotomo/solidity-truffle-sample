import React from 'react';
import Web3 from 'web3';

/**
 * Home
 */
const Home: React.FC = () => {
  const onClick = async () => {
    const port = 7545;
    const host = 'http://127.0.0.1';
    const web3 = new Web3(new Web3.providers.HttpProvider(`${host}:${port}`));

    const accountsWeb3 = await web3.eth.getAccounts();
    console.log(accountsWeb3);
  };

  return <div onClick={onClick}>button</div>;
};

export default Home;
