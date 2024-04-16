import styled from 'styled-components';

export const StyledBookmark = styled.div`
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.fontColor.default};
  }
`;
