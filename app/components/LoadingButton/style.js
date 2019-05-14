import styled from 'styled-components';
import { spinner } from 'containers/App/constants';

const LoadingButtonStyle = styled.div`
  &.loadingButton {
    a {
      &::after {
        content: '';
        background: url(${spinner}) scroll no-repeat 0 0;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 15px;
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingButtonStyle;
