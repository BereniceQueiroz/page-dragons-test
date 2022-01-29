import styled, { css } from 'styled-components';

const small = css`
  width: 30px;
  height: 30px;
`;

const medium = css`
  width: 50px;
  height: 50px;
`;

const large = css`
  width: 60px;
  height: 60px;
`;

const SIZES = {
  small,
  medium,
  large,
};

export const Spinner = styled.svg`
  position: relative;
  animation: rotate 2s linear infinite;

  ${props => SIZES[props.size]}

  circle {
    stroke: ${props => props.color};
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
