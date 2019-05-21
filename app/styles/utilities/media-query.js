import { css } from 'styled-components';

const sizes = {
  small: 767,
  large: 768,
  extraLarge: 991,
};

function large(...args) {
  return css`
    @media (min-width: ${sizes.large}px) {
      ${css(...args)};
    }
  `;
}

function extraLarge(...args) {
  return css`
    @media (min-width: ${sizes.extraLarge}px) {
      ${css(...args)};
    }
  `;
}

function small(...args) {
  return css`
    @media (max-width: ${sizes.small}px) {
      ${css(...args)};
    }
  `;
}

const media = {
  small,
  large,
  extraLarge,
};

export default media;
