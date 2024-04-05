import styled, { CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
}

export const StyledLogo = styled.img<Props>`
  ${(p) => p.sizeStyle}

  cursor: pointer;
  width: var(--logo-width, 96px);
  height: auto;
`;
