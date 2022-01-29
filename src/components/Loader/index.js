import React from 'react';
import { Spinner } from './styles';
import themes from '~/styles/theme';

export const LOADER_TYPES = {
  size: {
    small: 'small',
    medium: 'medium',
    large: 'large',
  },
};

export default function Loader({
  color = themes.colors.title,
  size = LOADER_TYPES.size.small,
}) {
  return (
    <S.Spinner viewBox="0 0 40 40" color={color} size={size}>
      <circle cx="20" cy="20" r="15" fill="none" strokeWidth="4" />
    </S.Spinner>
  );
}
