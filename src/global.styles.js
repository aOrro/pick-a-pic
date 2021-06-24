import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${props => props.theme.main};
        font-family: Poppins, sans-serif;
        box-sizing: border-box;
      }
  }
`;

export default GlobalStyle;
