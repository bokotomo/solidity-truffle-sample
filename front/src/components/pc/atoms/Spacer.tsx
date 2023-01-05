import styled from '@emotion/styled';
import size from '../../../modules/const/size';

const SpacerS = styled.div({
  height: size.ui.l3,
});
const SpacerM = styled.div({
  height: size.ui.l4,
});
const SpacerXM = styled.div({
  height: size.ui.l6,
});
const SpacerL = styled.div({
  height: size.ui.l8,
});
const SpacerXL = styled.div({
  height: size.ui.l10,
});

/**
 * 余白: 縦
 */
const Spacer = {
  S: SpacerS,
  M: SpacerM,
  XM: SpacerXM,
  L: SpacerL,
  XL: SpacerXL,
};
export default Spacer;
