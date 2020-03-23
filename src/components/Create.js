import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignupForm from './Forms/SignupForm';

export default function Create() {
  const [modal, setModal] = useState({
    show: false,
    icon: '',
    title: '',
    body: ''
  });

  const handleClose = () => setModal({ show: false });

  return (
    <div className="container">
      <div className="signup-form-content">
        <SignupForm setModal={setModal} />
        <div className="text-center">
          <Link className="nav-link" to="/login">Log Into Existing Account</Link>
        </div>
      </div>
      <Modal
        show={modal.show}
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modal.icon && <FontAwesomeIcon icon={modal.icon} className="mr-2" />} {modal.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.body}
        </Modal.Body>
      </Modal>
    </div>
  );
}
