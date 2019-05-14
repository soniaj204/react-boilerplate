import { injectGlobal } from 'styled-components';
import { closeIcon } from 'containers/App/constants';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #f1f2f5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    // background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .ReactModal__Overlay {
    background: rgba(0,0,0,0.7) !important;

  }
  .ReactModal__Content {
    width: 550px;
    border: 0 !important;
    padding: 0 !important

    .modalHeader {
      display: flex;
      justify-content: space-between;
      padding: 20px 15px 20px 20px;
      border-bottom: 1px solid #d3d4dd;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;

      h2 {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.17;
        letter-spacing: normal;
        color: #000000 !important;
        margin: 0;
        padding: 0 20px 0 0;

      }

      .closeIcon {
        background: url(${closeIcon}) scroll no-repeat 0 0;
        text-indent: -9999px;
        width: 14px;
        height: 14px;
        opacity: 1;
        cursor: pointer;
        float: right;
        background-size: 100% 100%;
      }
    }

    .modalBody {
      position: relative;
      flex: 1 1 auto;
      padding: 15px 50px 15px 20px;
      min-height: 200px;
    }

    .modalFooter {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px 20px;
      border-top: 1px solid #d3d4dd;

      .btn {
        margin-left: 10px;
        border-radius: 4px;
        height: 40px;
        min-width: 100px;

        &.btn-primary {
          border: solid 1px #3ab4a5;
          background-color: #3ab4a5;
        }

        &.btn-secondary {
          border: solid 1px #bbbbbb;
          background-color: #bbbbbb;
        }
      }
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
     opacity: 0;
  }

  .ReactModal__Content {
    transition: transform .3s ease-out;
    transform: translate(0,-25%) !important;
    margin: 1.75rem auto;
    position: relative !important;
  }

  .ReactModal__Content--after-open {
    transform: translate(0,0) !important;
  }

  .ReactModal__Content--after-close {
    transform: translate(0,-25%) !important;
  }

  body {
    background-color: #f1f2f5 !important;
  }
`;
