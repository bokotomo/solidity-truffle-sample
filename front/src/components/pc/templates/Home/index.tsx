import React from 'react';
import styled from '@emotion/styled';
import Spacer from '../../atoms/Spacer';
import Title from '../../atoms/Title';
import Content from '../../frames/Content';
import size from '../../../../modules/const/size';
import HomeLogin from './organisms/HomeLogin';
import HomeInfo from './organisms/HomeInfo';

const Wrapper = styled.div`
  padding: ${size.ui.l4}px;
`;

interface Props {
  readonly accounts: string[];
  readonly myAccount: string | undefined;
  readonly setMyAccount: (account: string) => void;
}
/**
 * Template: Home
 */
const Home: React.FC<Props> = (p: Props) => {
  return (
    <Wrapper>
      {!p.myAccount && (
        <>
          <HomeLogin setMyAccount={p.setMyAccount} />
          <Spacer.M />
        </>
      )}

      {p.myAccount && (
        <>
          <Spacer.M />
          <HomeInfo myAccount={p.myAccount} />
        </>
      )}

      <Spacer.M />

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
