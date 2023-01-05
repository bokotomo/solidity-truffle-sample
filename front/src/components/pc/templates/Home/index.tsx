import React from 'react';
import { useHooks } from './hooks';
import styled from '@emotion/styled';
import Spacer from '../../atoms/Spacer';
import Button from '../../atoms/Button';

const Wrapper = styled.div`
  padding: 16px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Content = styled.div`
  padding: 16px;
  background: white;
  border-radius: 4px;
`;

interface Props {
  readonly accounts: string[];
}

/**
 * Home
 */
const Home: React.FC<Props> = (p: Props) => {
  const { onClick, onClickApprove } = useHooks();

  return (
    <Wrapper>
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
