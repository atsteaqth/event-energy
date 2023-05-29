import React, {useState} from 'react';
import Modal from 'react-modal'
import Button from "../Button/Button";
import Form from "../Form/Form";
import Confirm from "../Confirm/Confirm";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.10)'
    }
}

Modal.setAppElement('#root')

const ModalForm = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [send, setIsSend] = useState(false)


    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log('onSubmit')
        setIsSend(true)
    }

    return (
        <div className="modal">
            <Button action={openModal}/>
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                {
                    !send
                        ? <Form submit={onSubmit} modalClose={closeModal} />
                        : <Confirm />
                }


            </Modal>
        </div>
    );
};

export default ModalForm;