import styled from 'styled-components';
import { closeIcon } from 'containers/App/constants';
import {success, danger, warning} from 'themes/variables';

const ToastContainerStyle = styled.div`
  .Toastify__toast-container {
    // width: 600px;
  }
  .Toastify__toast {
    background: #ffffff;
    color: #000000;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    padding: 20px;

    .Toastify__close-button {
      background: url(${closeIcon}) scroll no-repeat 0 0;
      text-indent: -9999px;
      width: 16px;
      height: 16px;
      opacity: 1;
    }

    .Toastify__toast-body {
      font-size: 16px;
      line-height: 20px;
      padding: 0 10px 0 0;
    }

    &.Toastify__toast--success {
      border-left: 4px solid ${success};
    }

    &.Toastify__toast--error {
      border-left: 4px solid ${danger};
    }

    &.Toastify__toast--warning {
      border-left: 4px solid ${warning};
    }
  }
`;

export default ToastContainerStyle;
