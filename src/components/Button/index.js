import React from 'react';

import { ButtonStyle } from './styles';
import themes from '~/styles/theme';
import Loader from '../Loader';

export const BUTTON_TYPES = {
  outlined: 'outlined',
  default: 'default',
};

function Button({
  children,
  isLoading = false,
  disabled,
  type = BUTTON_TYPES.default,
  ...others
}) {
  return (
    <ButtonStyle disabled={disabled} type={type} {...others}>
      {isLoading ? <Loader color={themes.colors.title} /> : children}
    </ButtonStyle>
  );
}

export default Button;
