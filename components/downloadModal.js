import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form,Button, FormGroup, CloseButton } from "react-bootstrap";

// Styling.
import styles from '../styles/index_nav_bar.module.css';
function DownloadModal(props) {
    const { showModal, handleClose } = props;
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [customertype, setCustomertype] = useState('')
const [phonetype, setPhonetype] = useState('')

const [submitted, setSubmitted] = useState(false)
const handleSubmit = (e) => { 
  e.preventDefault()
  console.log('Sending')
let data = {
    name,
    email,
    phonetype,
    customertype
  }
fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log(res.status);
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage("Your request submitted successfully")
      
    } else {
      setMessage(res.statusText)
    }
  })
}
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
        <p style={{color:'green'}}>{message}</p>
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

              <Form.Control type="text" name="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name" required/>

            </Form.Group>
            <br></br>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control type="email"  name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email address" />
            </Form.Group>
            <br></br>
            <FormGroup>
              <p className={styles.questionheading}>Which OS do you use?</p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Android"
                    name="phonetype"
                    value="Android"
                    type={type}
                    onChange={(e)=>{setPhonetype(e.target.value)}}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Ios"
                    value="Ios"
                    name="phonetype"
                    onChange={(e)=>{setPhonetype(e.target.value)}}
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
                    value="Customer"
                    name="customertype"
                    onChange={(e)=>{setCustomertype(e.target.value)}}
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Business"
                    value="Business"
                    name="customertype"
                    onChange={(e)=>{setCustomertype(e.target.value)}}
                    type={type}
                    id={`inline-${type}-2`}
                  />

                </div>
              ))}
            </FormGroup>
            <br></br>

            <Button className={styles.button} variant="primary" type="submit" onClick={(e)=>{handleSubmit(e)}}>
              Submit
            </Button>
          </Form>
        </Modal.Body>

      </Modal>
    )
    
}

export default DownloadModal;