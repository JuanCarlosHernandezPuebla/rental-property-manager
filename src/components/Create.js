import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const createAccountEndPoint = 'http://localhost:3000/users/create';

export default function Create() {
  const [modal, setModal] = useState({
    show: false,
    title: '',
    body: ''
  });

  const createAccount = event => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    fetch(createAccountEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const { success } = data
        success ? setModal({
          show: true,
          title: (
            <>
              <FontAwesomeIcon icon="check-circle" className="mr-2" />
              Success
            </>
          ),
          body: 'Successfully created user account!'
        }) :
          setModal({
            show: true,
            title: (
              <>
                <FontAwesomeIcon icon="exclamation-circle" className="mr-2" />
                Failure
              </>
            ),
            body: 'Failed to create user account!'
          });
      })
      .catch(error => {
        console.error('Error: ', error);
      })
  }

  const handleClose = () => setModal({ show: false });

  return (
    <div className="container">
      <form className="form-signup" method="POST" onSubmit={createAccount}>
        <img className="mb-4" src="/images/rpm_logo.png" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
        <label htmlFor="input_username">Username</label>
        <input type="text" id="input_username" name="username" className="form-control" placeholder="Username" required autoFocus />
        <label htmlFor="input_password">Password</label>
        <input type="password" id="input_password" name="password" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block btn-login" type="submit">Create an account</button>
        <div>
          <Link className="nav-link" to="/login">Log Into Existing Account</Link>
        </div>
      </form>
      <Modal
        show={modal.show}
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modal.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.body}
        </Modal.Body>
      </Modal>
    </div>
  );
}
