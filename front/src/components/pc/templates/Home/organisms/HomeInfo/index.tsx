import React from 'react';
import { useHooks } from './hooks';
import styled from '@emotion/styled';
import Spacer from '../../../../atoms/Spacer';
import Button from '../../../../atoms/Button';
import Title from '../../../../atoms/Title';
import Content from '../../../../frames/Content';
import { Contract } from '../../../../../../interface/ethers';

const Wrapper = styled.div``;

interface Props {
  readonly myAccount: string | undefined;
  readonly contractLevelItem: Contract | undefined;
}
/**
 * Organisms: HomeInfo
 */
const HomeInfo: React.FC<Props> = (p: Props) => {
  const { onClick, onClickApprove } = useHooks(p.contractLevelItem);

  return (
    <Wrapper>
      <Title>My account</Title>

      <Spacer.M />

      <Content>{p.myAccount || 'no login'}</Content>

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

export default HomeInfo;
