import React from 'react';
import PropTypes from 'prop-types';
import ModalStyle from './style';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import Button from 'components/Button';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const customStyles = {
  content: {
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    marginRight: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

class ModalPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <ModalStyle>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modalHeader">
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              <FormattedMessage {...messages.modalHeader} />
            </h2>
            <button onClick={this.closeModal} className="closeIcon" />
          </div>

          <div className="modalBody">
            <p>
              <FormattedMessage {...messages.modalBody} />
            </p>
          </div>
          <div className="modalFooter">
            <button className="btn btn-secondary" onClick={this.closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary">Save</button>
          </div>
        </Modal>
      </ModalStyle>
    );
  }
}
export default ModalPopup;
