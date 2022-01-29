import styled, { css } from 'styled-components';
import themes from '~/styles/theme';

const outlinedButton = css`
  background: transparent;
  border: 1px solid ${themes.colors.title};
  color: ${themes.colors.title};
`;

const defaultButton = css`
  background: ${themes.colors.blue};
  border: 0;
  color: ${themes.colors.grey};
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${themes.colors.blueLigth};
  }
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  font-size: 16px;

  margin-top: 20px;
  height: 50px;
  border-radius: 8px;
  opacity: ${props => (props.disabled ? '0.7' : '1')};
  ${props => (props.type == 'outlined' ? outlinedButton : defaultButton)};
`;
