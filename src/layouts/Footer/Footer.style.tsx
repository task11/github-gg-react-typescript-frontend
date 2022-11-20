import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: ${(props) => props.theme.bgColor.header};
  color: ${(props) => props.theme.fontColor.default};
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.2);
`;
