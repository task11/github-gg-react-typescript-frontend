import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  a {
    text-decoration: none;
  }
`;
