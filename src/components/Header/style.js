import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  padding: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  /* background: purple; */

  nav {
    font-size: 2rem;

    .nav {
      /* display: flex; */
      /* font-size: 2rem; */
      background-color: red;

      ul {
        display: flex;
        gap: 3rem;

        .line {
          height: auto.1rem;
          width: 5rem;

          background: ${({ theme }) => theme.COLORS.WHITE};
        }

        li {
          position: relative;
          
        }
      }

      .diamond-bar {
        width: 100%;
        height: 2rem;
        position: relative;
        
        background-color: purple;

        .external-diamond {
            position: absolute;
            top: 70%;
            left: 10%;
            transform: translate(-50%, -50%);

            font-size: 1.5rem;
          }
          .internal-diamond {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-size: 1rem;
          }
      }
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    font-family: 'Srisakdi', cursive;
    font-weight: bold;
  }

  .social-media {
    /* display: flex; */

    .dark-light-mode-button {
      /* asdasd */
    }

    ul {
      display: flex;
      gap: 3rem;

      li {
        /* width: 5rem;
        height: 5rem; */

        svg{
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
`