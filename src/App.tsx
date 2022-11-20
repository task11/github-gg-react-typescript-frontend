import { GlobalStyle, CustomThemeProvider } from './styles';

import Router from './Router';

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Router />
    </CustomThemeProvider>
  );
}
