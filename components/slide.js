import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import IndexNavBar from '../components/indexNavBar'
// Styling.
import slidestyles from '../styles/slide.module.css'

import React, { useState, useEffect, useRef } from 'react'
import DownloadModal from './downloadModal';
function Slide() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
        <DownloadModal showModal={show}  handleClose={handleClose}/>
        
        <Container className={`${slidestyles.container} px-5 py-5`} fluid >
            
            <Row className={slidestyles.sliderow} >
                <Col className={`${slidestyles.slideColumn1} `} xs={12} lg={6} >
                <p className={slidestyles.heading}>LOCAL POCKET</p>
                <p  className={slidestyles.subheading}>SAVE AND <br></br>SUPPORT LOCAL</p>
                <p className={slidestyles.bodytext}>The need for high streets to regenerate helping communities,
Local Council and business owners</p>
                <Button  onClick={() => setShow(true)} className={slidestyles.slideButton}>Download Now</Button>
                </Col>
                <Col  xs={12} lg={6}>
                <img  width="100%" height="100%" layout="responsive" objectFit="cover"
        
                src="/slide_image_right.png"
                className={`${slidestyles.slideImage}  align-center`}
                alt="Customer-insights"
              />
                </Col>
            </Row>
            </Container>
            
        </>
    )
}

export default Slide;