import styled, { CSSProp } from 'styled-components';

type Props = {
  sizeStyle: CSSProp;
};

export const StyledLogo = styled.img<Props>`
  ${(p) => p.sizeStyle}

  cursor: pointer;
  width: var(--logo-width, 96px);
  height: auto;
`;
