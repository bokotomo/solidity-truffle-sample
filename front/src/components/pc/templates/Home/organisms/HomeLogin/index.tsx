import styled from '@emotion/styled';
import React from 'react';
import { Web3Provider } from '../../../../../../interface/ethers';
import Button from '../../../../atoms/Button';
import Spacer from '../../../../atoms/Spacer';
import Title from '../../../../atoms/Title';
import { useHooks } from './hooks';

const Wrapper = styled.div``;

interface Props {
  readonly setProvider: (provider: Web3Provider) => Promise<void>;
}
/**
 * Organisms: HomeLogin
 */
const HomeLogin: React.FC<Props> = (p: Props) => {
  const { onClickLogin } = useHooks(p.setProvider);

  return (
    <Wrapper>
      <Title>MetaMaskに接続する</Title>

      <Spacer.S />

      <Button onClick={onClickLogin}>ログイン</Button>
    </Wrapper>
  );
};

export default HomeLogin;
