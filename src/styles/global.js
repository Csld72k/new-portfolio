import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};    
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`