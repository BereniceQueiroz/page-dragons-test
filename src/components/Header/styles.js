import styled from 'styled-components';

import themes from '~/styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  > img {
    width: 50px;
    height: auto;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    color: ${themes.colors.blue};
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0;
    line-height: 23px;

    svg {
      margin-left: 8px;
      color: ${themes.colors.blue};
    }
  }

  button {
    margin-left: 64px;
    color: ${themes.colors.title};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;

    background: transparent;
    border: 0;
  }
`;
