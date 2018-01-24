import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {

    return (
        <Modal
            isOpen={!!props.ShowModal}
            onRequestClose={props.closeModal}
            contentLabel='Thank_you'
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}>
            <p>
        Will reach out to you as soon as possible.</p>
            <button className="closeButton" onClick={props.closeModal}>Okay</button>
        </Modal>
    )
}

export default OptionModal;