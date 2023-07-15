import { css } from 'styled-components';

const getFontWeight = (weight) => {
  switch (weight) {
    case 'B':
      return 700;
    case 'R':
      return 400;
    case 'T':
      return 100;
    default:
      return 400;
  }
};

const P_FONT = ({ weight }) => css`
  font-family: Pretendard Variable;
  font-weight: ${getFontWeight(weight)};
`;

export const FONT_STYLES = {
  P_B: P_FONT({ weight: 'B' }),
  P_R: P_FONT({ weight: 'R' }),
  P_T: P_FONT({ weight: 'T' }),
};
