import React from 'react';
import { useHooks } from './hooks';
import styled from '@emotion/styled';
import Spacer from '../../../../atoms/Spacer';
import Button from '../../../../atoms/Button';
import Title from '../../../../atoms/Title';

const Wrapper = styled.div``;

/**
 * Organisms: HomeLogin
 */
const HomeLogin: React.FC = () => {
  const { onClickLogin } = useHooks();

  return (
    <Wrapper>
      <Title>MetaMaskに接続する</Title>

      <Spacer.S />

      <Button onClick={onClickLogin}>ログイン</Button>
    </Wrapper>
  );
};

export default HomeLogin;
