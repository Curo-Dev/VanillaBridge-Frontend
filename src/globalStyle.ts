  import {
  createGlobalStyle,
} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0;
    padding: 0 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
  * {
    box-sizing: inherit;
  }
  html, body, #root {
    height: 100%;
  }
  input, button, textarea {
    font-family: inherit;
  }
`;