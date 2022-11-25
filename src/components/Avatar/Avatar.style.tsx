import styled, { type CSSProp } from 'styled-components';

interface Props {
  sizeStyle: CSSProp;
}

export const StyledImg = styled.img<Props>`
  ${(p) => p.sizeStyle};
  width: var(--avatar-width, 16px);
  height: var(--avatar-height, 16px);
  border-radius: 99%;
`;
