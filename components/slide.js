import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import IndexNavBar from '../components/indexNavBar'
// Styling.
import slidestyles from '../styles/slide.module.css'
import Image from 'next/image'

function Slide() {
    return (
        <>
        
        <Container className={slidestyles.container} fluid >
            

            <Row >
                <Col className={`${slidestyles.slideColumn1} px-5`} xs={12} lg={6} px={10}>
                <p className={slidestyles.heading}>LOCAL POCKET</p>
                <p  className={slidestyles.subheading}>SAVE AND <br></br>SUPPORT LOCAL</p>
                <p className={slidestyles.bodytext}>The need for high streets to regenerate helping communities,
Local Council and business owners</p>
                <Button className={slidestyles.slideButton}>Download Now</Button>
                </Col>
                <Col  xs={12} lg={6}>
                <Image  width="100%" height="100%" layout="responsive" objectFit="contain"
        
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