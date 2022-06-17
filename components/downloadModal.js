import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form,Button, FormGroup, CloseButton } from "react-bootstrap";
// Styling.
import styles from '../styles/index_nav_bar.module.css';
function DownloadModal(props) {
    const { showModal, handleClose } = props;
    return (
        <Modal className="px-5 py-5"
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CloseButton className={styles.closebutton1} onClick={handleClose} />

        <Modal.Body className="px-5 py-5">
          <p className={styles.title} >
            WELCOME!
          </p>

          <p className={styles.subtitle}>
            Ready to create your Local Pocket? We are hard at working finish up development.
            <br></br> <br></br>
            Be one of the first to find fantastic deals or promote your business by signing up below to be informed when we launch!
          </p>
          <br></br>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="text" placeholder="Enter your name" />

            </Form.Group>
            <br></br>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control type="email" placeholder="Enter your email address" />
            </Form.Group>
            <br></br>
            <FormGroup>
              <p className={styles.questionheading}>Which OS do you use?</p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Android"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Ios"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                </div>
              ))}
            </FormGroup>
            <br></br>
            <FormGroup>
              <p className={styles.questionheading}>Who are you?</p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Customer"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Business"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                </div>
              ))}
            </FormGroup>
            <br></br>

            <Button className={styles.button} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

      </Modal>
    )
    
}

export default DownloadModal;