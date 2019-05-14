import React from 'react';
import PropTypes from 'prop-types';
import LoadingButtonStyle from './style';

import Button from 'components/Button';


class LoadingButton extends React.Component {
  render() {
    return (
      <LoadingButtonStyle className="loadingButton">
        <Button>Loading....</Button>
      </LoadingButtonStyle>
    );
  }
}

export default LoadingButton;
