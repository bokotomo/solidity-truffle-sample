import React from 'react';
import { useHooks } from './hooks';
import styled from '@emotion/styled';
import Spacer from '../../../../atoms/Spacer';
import Button from '../../../../atoms/Button';
import Title from '../../../../atoms/Title';
import Content from '../../../../frames/Content';
import { Contract } from '../../../../../../interface/ethers';

const Wrapper = styled.div``;

const Input = styled.input`
  border: 1px solid #bccfff;
  background: white;
  padding: 8px 16px;
  border-radius: 50px;
`;

interface Props {
  readonly myAccount: string;
  readonly myTokenIds: number[];
  readonly contractLevelItem: Contract | undefined;
}
/**
 * Organisms: HomeInfo
 */
const HomeInfo: React.FC<Props> = (p: Props) => {
  const {
    onChangeMint,
    onChangeTransferFrom,
    onChangeTransferTo,
    onChangeTransferTokenId,
    onClickMint,
    onClickTransfer,
  } = useHooks(p.contractLevelItem);

  return (
    <Wrapper>
      <Title>My account</Title>
      <Spacer.S />
      <Content>{p.myAccount}</Content>

      <Spacer.L />

      <Title>My TokenIds</Title>
      <Spacer.S />
      <Content>
        {p.myTokenIds.map((id, index) => (
          <React.Fragment key={id}>
            {index !== 0 && <>, </>}
            {id}
          </React.Fragment>
        ))}
      </Content>

      <Spacer.L />

      <Title>Mint</Title>
      <Spacer.S />
      <Input onChange={onChangeMint} type="text" placeholder="to: 0x~" />
      <Spacer.S />
      <Button onClick={onClickMint}>Mintする</Button>

      <Spacer.L />

      <Title>Transfer</Title>
      <Spacer.S />
      <Input
        onChange={onChangeTransferFrom}
        type="text"
        placeholder="from: 0x~"
      />
      <Spacer.S />
      <Input onChange={onChangeTransferTo} type="text" placeholder="to: 0x~" />
      <Spacer.S />
      <Input
        onChange={onChangeTransferTokenId}
        type="number"
        placeholder="tokenId: 0"
      />
      <Spacer.S />
      <Button onClick={onClickTransfer}>Transferする</Button>
    </Wrapper>
  );
};

export default HomeInfo;
