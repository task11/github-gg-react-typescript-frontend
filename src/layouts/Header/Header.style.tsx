import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.bgColor.header};
  color: ${(props) => props.theme.fontColor.header};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
