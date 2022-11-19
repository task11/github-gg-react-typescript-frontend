import styled from 'styled-components';
import { GlobalStyle, CustomThemeProvider } from './styles';

import { useTheme } from './utils/hooks';

const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor.background};
  color: ${(props) => props.theme.fontColor.default};
  transition: background 0.3s ease-in, color 0.2s ease-in;
`;

export default function App() {
  const { onChangeTheme } = useTheme();
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <StyledMain>
        <button type="button" onClick={onChangeTheme}>
          버튼
        </button>
        <span>hel</span>
      </StyledMain>
    </CustomThemeProvider>
  );
}
