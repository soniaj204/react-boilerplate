import React from 'react';
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ToastContainerStyle from './style';


class Toasts extends React.Component {
  render() {
    return (
      <ToastContainerStyle>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </ToastContainerStyle>
    );
  }
}

export default Toasts;
