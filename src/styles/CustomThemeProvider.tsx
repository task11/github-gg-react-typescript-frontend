import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

import { useTheme } from '../utils/hooks';
import { THEME_MODE } from '../utils/common';

interface Props {
  children: React.ReactNode;
}

export function CustomThemeProvider({ children }: Props) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === THEME_MODE.dark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
