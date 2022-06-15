import IndexNavBar from '../components/indexNavBar'
import IndexMidSection from '../components/indexMidSection'
import Slide from '../components/slide'
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Link from 'next/link'

// Styling.
import styles from "../styles/index_services.module.css";
function IndexServices() {
    return (
     
      <Container fluid className="py-5">
        <Row >
        
            <Col className={`${styles.servicesColumn1} pt-5`} xs={12} lg={6}>
              <div>
                <p className={styles.service1Heading}>My Local pocket</p>
            <img 
                src="/local_pocket.svg"
                className={`${styles.serviceImage} d-inline-block align-center`}
                alt="My Local pocket"
              />
              </div>

              <div className={`${styles.overlay}`} >
              <p className={styles.textstyle4}><Link  href= '/localpocket'> View Details</Link></p></div>
            
                

            </Col>
            <Col className={`${styles.servicesColumn2} pt-5`} xs={12} lg={6}>
              <div>
                <p className={styles.service2Heading}>My Business</p>
            <img 
                src="/my_business.svg"
                className={`${styles.serviceImage} d-inline-block align-center`}
                alt="My Business"
              />
              </div>

              <div className={`${styles.overlay1}`} >

                <p className={styles.textstyle4}><Link  href= '/mybusiness'> View Details</Link></p>
                
                
              </div>

            </Col>
            

           
        </Row>
      </Container>
   
    )
}

export default IndexServices;