import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    user-select: none;
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
/* 
    border-bottom: 1.5px solid red;
    border-radius:7%; */

    &::after {
      width: 100%;
      height: .2rem;
      content: '';
      display: block;

      background: linear-gradient(270deg, #986dff 0%, #17161d 100%);
      transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);

      border-radius: 30%;
    }

    &:hover {
      /* animation: hoverAnimation 1s linear forwards; */
      /* animation: hoverAnimation 0.5s ease 0.3s 1 normal forwards running; */

      &::after {
        animation: hoverAnimation 0.5s ease 0.3s 1 normal forwards running;
      }
    }
  }

  li {
    list-style: none;
  }

  @keyframes hoverAnimation {
    /* 100% {
      border-bottom: 1.5px solid red;
      border-radius:7%;
    } */
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`