import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Bold'), url('/fonts/Oswald-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: block;
  }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Medium'), url('/fonts/Oswald-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: block;
  }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Regular'), url('/fonts/Oswald-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  body {
    background: #000;
    color: #fff;
    font-weight: 400;
    font-family: 'Oswald', sans-serif;
  }
`;
