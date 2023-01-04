import React from 'react';
import { web3 } from '../../../../modules/web3';
import { AbiItem } from 'web3-utils';
import { Gold } from '../../../../types/abi/Gold';
import ContractGold from '../../../../contracts/Gold.json';

const address = '0x423abC469F2eC1a3BE50AB1c4099eE1cc3de3F00';
const ABI = ContractGold.abi as any as AbiItem;

/***
 * Home
 */
const Home: React.FC = () => {
  const onClick = async () => {
    const accountsWeb3 = await web3.eth.getAccounts();
    console.log(accountsWeb3);

    const contract = new web3.eth.Contract(ABI, address) as unknown as Gold;
    const addressAcounts0 = '0xB9Ec7A456be861e89f7493018E9FAf724678aa5a';
    console.log(await contract.methods.balanceOf(addressAcounts0).call());
  };

  return <div onClick={onClick}>button</div>;
};

export default Home;
