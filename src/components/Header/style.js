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
      /* background-color: red; */

      ul {
        display: flex;
        gap: 3rem;

        li {
          position: relative;
          
          a {
            color: ${({ theme }) => theme.COLORS.WHITE};
          }
        }
      }

      .diamond-bar {
        width: 100%;
        height: 2rem;
        position: relative;
        
        /* background-color: purple; */

        // Here it defines the position of the navigation menu indicator
        .external-diamond {
          padding: .2rem;
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translate(-50%, -50%);

          font-size: 1.7rem;


          /* background-color: #000; */
          background-color: #000;
          background-clip: content-box;
          border-radius: 50%;

          &.about-me {
            left: 10%;
          }

          &.projects {
            left: 35%;
          }

          &.education {
            left: 60%;
          }

          &.knowledge {
            left: 89%;
          }
        }
        .internal-diamond {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translate(-50%, -50%);

          font-size: .6rem;

          &.about-me {
          left: 10%;
          }

          &.projects {
          left: 35%;
          }

          &.education {
            left: 60%;
          }

          &.knowledge {
            left: 89%;
          }
        }

        .fixed-line {
          height: .5rem;
          width: 79%;
          position: absolute;
          top: 37%;
          left: 10.5%;
          /* z-index: 0; */
          /* display: none; */
          /* background: ${({ theme }) => theme.COLORS.GRAY}; */

          background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRAY_LIGHT} 0%, ${({ theme }) => theme.COLORS.GRAY} 40%, ${({ theme }) => theme.COLORS.GRAY} 60%, ${({ theme }) => theme.COLORS.GRAY_LIGHT} 100%);
        }

        /*.line {
          height: .5rem;
          width: 75.5%;
          position: absolute;
          top: 37%;
          left: 11.8%;


          background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.GRAY_LIGHT} 0%, ${({ theme }) => theme.COLORS.GRAY} 40%, ${({ theme }) => theme.COLORS.GRAY} 60%, ${({ theme }) => theme.COLORS.GRAY_LIGHT} 100%);
          }*/

        .slider-line {
          height: .2rem;
          /* width: 79%; */
          width: 24%;
          position: absolute;
          top: 45%;
          left: 10.5%;

          background-color: ${({ theme }) => theme.COLORS.WHITE};

          &.about-me {
            width: 0;
          }

          &.projects {
            width: 25%;
          }

          &.education {
            width: 50%;
          }

          &.knowledge {
            width: 80%;
          }
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