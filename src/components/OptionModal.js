import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel = 'indecision-modal'
        onRequestClose = {props.close}
        closeTimeoutMS = {200}
        className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>  
      <p className="modal__body">{props.selectedOption}</p><br/>
      <button onClick={props.close}>Okay</button>
    </Modal>
);

export default OptionModal;