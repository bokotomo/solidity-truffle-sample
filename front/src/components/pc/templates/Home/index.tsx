import styled from '@emotion/styled';
import React from 'react';
import { Web3Provider, Contract } from '../../../../interface/ethers';
import size from '../../../../modules/const/size';
import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import Content from '../../frames/Content';
import HomeInfo from './organisms/HomeInfo';
import HomeLogin from './organisms/HomeLogin';

const Wrapper = styled.div`
  padding: ${size.ui.l4}px;
`;

interface Props {
  readonly accounts: string[];
  readonly myAccount: string | undefined;
  readonly contractLevelItem: Contract | undefined;
  readonly myTokenIds: number[];
  readonly setProvider: (provider: Web3Provider) => Promise<void>;
}
/**
 * Template: Home
 */
const Home: React.FC<Props> = (p: Props) => {
  return (
    <Wrapper>
      {!p.myAccount && <HomeLogin setProvider={p.setProvider} />}

      {p.myAccount && (
        <>
          <Spacer.M />
          <HomeInfo
            myAccount={p.myAccount}
            contractLevelItem={p.contractLevelItem}
            myTokenIds={p.myTokenIds}
          />
        </>
      )}

      <Spacer.L />

      <Title>Chain All Accounts</Title>

      <Spacer.M />

      <Content>
        {p.accounts.map(account => (
          <div key={account}>{account}</div>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Home;
