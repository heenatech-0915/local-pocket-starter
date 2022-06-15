import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from 'next/link'
// Styling.
import styles from "../styles/index_footer.module.css";
function IndexFooter() {
  return (
    <Container fluid>
      <Container className={styles.footerContainer}>
      <Row>
        <Col xs={12} lg={3}>
          <img src="/logo_color.svg" className="d-inline-block align-top" alt="Local Pocket" />
          
          <p className={styles.textStyle1}>@2022 Local Pocket Ltd.</p>

        </Col >
        
        <Col xs={12} lg={3}>
        <p className={styles.textStyle2}>Office</p>
        
        
          <Row className="pt-3">
            <Col xs={1} lg={1}>
            <img src="/phone_icon.svg" className="d-inline-block align-top" alt="Local Pocket" />
            </Col>
            <Col xs={11} lg={11}>
            <p className={styles.textStyle3}> +1 609 9004 144</p>

            </Col>

            </Row>
            <Row >
            <Col xs={1} lg={1}>
            <img src="/location.svg" className="d-inline-block align-top" alt="Local Pocket" />
            </Col>
            <Col xs={11} lg={11}>
            <p className={styles.textStyle3}> Suite 208 C 204 Ark Road Mount Laurel Township New Jersey, USA - 08054</p>

            </Col>

            </Row>
          
          
        
        </Col>
        <Col xs={12} lg={3}>
        <p className={styles.textStyle2}>Solutions</p>
          <div className="pt-3"></div>
        
          <Col>
          <p className={styles.textStyle3}><Link  href= '/mybusiness'> My Business</Link> </p>

          </Col>
          <Col>
          <p className={styles.textStyle3}><Link  href= '/localpocket'> My Local Pocket</Link> </p>

          </Col>
          <Col>
          <p className={styles.textStyle3}><Link  href= 'mailto:info@localpocket-app.co.uk'> Contact</Link></p>

          </Col>
          <Col>
          <p className={styles.textStyle3}>Download</p>

          </Col>
          <Col>
          <p className={styles.textStyle3}><Link  href= '/privacypolicy'> Privacy</Link> </p>

          </Col>
          <Col>
          <p className={styles.textStyle3}> <Link  href= '/termsandconditions'> Terms and Conditions</Link></p>

          </Col>

        </Col>
        <Col xs={12} lg={3}>
        <p className={styles.textStyle2}>Connect</p>

        <Row className="pt-3">
          <Col><img src="/facebook.svg" className="d-inline-block align-top" alt="Facebook" /></Col>
          <Col><img src="/twitter.svg" className="d-inline-block align-top" alt="Twitter" /></Col>
          <Col><img src="/instagram.svg" className="d-inline-block align-top" alt="Instagram" /></Col>         
          <Col><img src="/linkedin.svg" className="d-inline-block align-top" alt="Linkedin" /></Col>
        
       
        </Row>
        <div className="pt-5"></div>

        <Row><p className={styles.textStyle3}>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p></Row>
        
        </Col>
        
      </Row>
      </Container>
    </Container>
  );
}

export default IndexFooter;
