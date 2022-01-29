import styled from 'styled-components';

import themes from '~/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: ${({ marginBottom }) => (marginBottom ? marginBottom : '5%')};
  margin-bottom: 2%;
  position: relative;

  label {
    font-size: 12px;
    text-align: left;
    margin-bottom: 2px;
    color: ${props =>
      props.isFocus ? themes.colors.title : themes.colors.blackSemiDark};
  }

  input {
    border: 0;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    /* border-style: solid;
    border-color: ${props =>
      props.isFocus ? themes.colors.title : themes.colors.greyLigth}; */

    color: ${themes.colors.title};
    height: 44px;
    padding: 0 15px;
    border-radius: 4px;

    &::placeholder {
      color: ${props =>
        props.isFocus ? themes.colors.title : themes.colors.blackSemiDark};
    }

    &:focus-within {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  .icon {
    position: absolute;
    max-width: 18px;
    height: 18px;
    right: 10px;
    top: 28px;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${themes.colors.messageError};
  margin-top: 2px;
`;
