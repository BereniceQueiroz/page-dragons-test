import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    ${({ theme }) => css`
      body,
      html,
      #root {
        height: 100vh;
        @media (max-width: 1080px) {
          font-size: 93.75%
        }
        @media (max-width: 720px) {
          font-size: 87.5%
        }
      }

      #root {
        /* max-width: 76.25rem; */
        margin: 0 auto;
      }

      body {
        font-family: ${theme.font.family};
        color: ${theme.colors.text};
        background: ${theme.colors.background};
      }

      button {
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: transparent;
      }

      ul {
        list-style-type: none;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        outline: none;
      }

      input,
      textarea,
      form, button {
        font-family: ${theme.font.family};
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      }
    `}
  `;
