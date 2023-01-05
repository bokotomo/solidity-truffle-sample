import React from 'react';
import { useHooks } from './hooks';
import styled from '@emotion/styled';
import Spacer from '../../atoms/Spacer';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import Content from '../../frames/Content';
import size from '../../../../modules/const/size';
import HomeLogin from './organisms/HomeLogin';

const Wrapper = styled.div`
  padding: ${size.ui.l4}px;
`;

interface Props {
  readonly accounts: string[];
}

/**
 * Template: Home
 */
const Home: React.FC<Props> = (p: Props) => {
  const { onClick, onClickApprove } = useHooks();

  return (
    <Wrapper>
      <HomeLogin />

      <Spacer.M />

      <Title>Accounts</Title>

      <Spacer.M />

      <Content>
        {p.accounts.map(account => (
          <div key={account}>{account}</div>
        ))}
      </Content>

      <Spacer.M />

      <Title>Level</Title>
      <Spacer.S />
      <Button onClick={onClick}>button</Button>

      <Spacer.M />

      <Title>approve</Title>
      <Spacer.S />
      <Button onClick={onClickApprove}>approveする</Button>
    </Wrapper>
  );
};

export default Home;
