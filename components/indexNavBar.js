import React from "react";
import { useState } from "react";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal, Form, FormGroup, CloseButton } from "react-bootstrap";
import { useRouter } from 'next/router'


// Styling.
import styles from '../styles/index_nav_bar.module.css';

export default function IndexNavBar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);



  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <Container className={styles.navbar} fluid>
      
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

      <Navbar style={{ backgroundColor: router.pathname !== '/mybusiness' ? '#57968B' : '#5A66D1' }} className={styles.navbar} collapseOnSelect expand="lg" variant="dark">
        <Container fluid className={styles.navbarcontainer}>
          <Navbar.Brand href="/"><img
            src="/logo_nav.svg" height="50px"

            className="d-inline-block align-top"
            alt="Local Pocket"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className={styles.navlink} href="/mybusiness">My Business</Nav.Link>
              <Nav.Link className={styles.navlink} href="/localpocket">
                My Local Pocket
              </Nav.Link>
              <Nav.Link className={styles.navlink} href="mailto:info@localpocket-app.co.uk">
                Contact Us
              </Nav.Link>
              <Nav.Link className={styles.navlink} onClick={() => setShowModal(true)} variant="primary" >
                Download
              </Nav.Link>
              <Button className={styles.primaryButton} href="https://localpocket-c3292.web.app/" >
                Vendor Login
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
}