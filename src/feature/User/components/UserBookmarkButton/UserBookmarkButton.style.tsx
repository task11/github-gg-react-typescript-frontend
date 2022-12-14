import styled from 'styled-components';

export const StyledBookmark = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.fontColor.default};
  }
`;
