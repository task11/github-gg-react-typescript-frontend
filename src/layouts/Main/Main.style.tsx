import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor.background};
  color: ${(props) => props.theme.fontColor.default};
  transition: background 0.3s ease-in, color 0.2s ease-in;
`;
