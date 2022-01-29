import styled from 'styled-components';

import themes from '~/styles/theme';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${themes.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 250px;
    height: 250px;
    margin-bottom: 40px;
  }

  h1 {
    color: ${themes.colors.title};
  }

  form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    a {
      color: themes.colors.title;
      margin-top: 15px;
      font-size: 16px:
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
