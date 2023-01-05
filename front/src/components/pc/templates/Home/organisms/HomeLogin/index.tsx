import React from 'react';
import styled from '@emotion/styled';
import { useHooks } from './hooks';
import Spacer from '../../../../atoms/Spacer';
import Button from '../../../../atoms/Button';
import Title from '../../../../atoms/Title';
import { Web3Provider } from '../../../../../../interface/ethers';

const Wrapper = styled.div``;

interface Props {
  readonly setMyAccount: (account: string) => void;
  readonly setProvider: (provider: Web3Provider) => void;
}
/**
 * Organisms: HomeLogin
 */
const HomeLogin: React.FC<Props> = (p: Props) => {
  const { onClickLogin } = useHooks(p.setMyAccount, p.setProvider);

  return (
    <Wrapper>
      <Title>MetaMaskに接続する</Title>

      <Spacer.S />

      <Button onClick={onClickLogin}>ログイン</Button>
    </Wrapper>
  );
};

export default HomeLogin;
