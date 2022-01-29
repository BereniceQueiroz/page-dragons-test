import React, { useState } from 'react';
import { Wrapper, ErrorText } from './styles';
import { images } from '~/assets';

const Input = ({ marginBottom, error, label, icon = false, ...rest }) => {
  const [focusInput, setFocusInput] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <Wrapper marginBottom={marginBottom} isFocus={focusInput}>
      <label>{label}</label>

      <input
        type={icon ? (showText ? 'text' : 'password') : 'text'}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
        {...rest}
      />
      {icon ? (
        showText ? (
          <img
            src={images.eyesVisible}
            onClick={() => setShowText(!showText)}
            className="icon"
          />
        ) : (
          <img
            src={images.eyesInvisible}
            onClick={() => setShowText(!showText)}
            className="icon"
          />
        )
      ) : null}

      {!!error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default Input;
