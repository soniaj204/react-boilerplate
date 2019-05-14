import { css } from 'styled-components';

import { primaryStyle, primaryHoverStyle } from 'themes/variables';

const buttonHeight = '50px';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  min-width: 180px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background: ${primaryStyle};
  height: ${buttonHeight};
  color: #ffffff !important;
  line-height: ${buttonHeight};
  position: relative;

  &:hover,
  &:active {
    background: ${primaryHoverStyle};
  }
`;

export default buttonStyles;
