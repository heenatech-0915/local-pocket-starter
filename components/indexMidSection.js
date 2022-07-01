import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


// Styling.
import styles from "../styles/index_mid_section.module.css";
function IndexMidSection() {
  return (
    <Container fluid >
      <div className={`${ styles.videoColumn}`}>
      <Container fluid  >
        <Row  >
          <Col className={`${ styles.videoColumn1 } py-5 px-5 }`} xs={12} lg={6}>
            <p className={styles.heading}>WHAT IS LOCAL POCKET?</p>

            <p className={styles.bodytext}>
              Local Pocket is a bespoke mobile app helping to connect diverse
              customers with independent businesses within a local neighbourhood
              Based on a unique “local community” concept that allows different
              trades to offer promotions and discounts on goods or services
              within an area
            </p>
            <br />
            <p className={styles.subheading}>BENEFITS</p>

            <p className={styles.bodytext}>
              With the support of Waltham Forest Council, Local Pocket will
              bring a great opportunity for local residents and businesses to
              come together and promote undeniable benefits of mutual support
              that will make Waltham Forest a better place to live and work
            </p>
          </Col>
          <Col className={`${ styles.videoColumn2 } g-0}`} xs={12} lg={6}>
            
            <video className="player-wrapper" controls style={{ width: '100%', height: '100%' }}>
        <source src="/video.mp4#t=1.0" />
      </video>
            
          </Col>
        </Row>
        <Container fluid className={styles.visioncontainer}>
        <Row className={styles.visioncontainerrow}>
          
          
          <p className={styles.heading}>OUR VISION AND OUR VALUES</p>
         
          <p className={styles.bodyheading1}>OUR VISION </p>
          <p className={styles.bodytext}>
            Our vision is to help independent small businesses to connect with
            local  customers so that they can thrive in the local market.
          </p>
        </Row>
       
       
        <Container className={`${ styles.valuesContainer} `} fluid>
        <p className={styles.bodyheading2}>OUR VALUES </p><br></br>
          <Row  className={`${styles.valuesRow}  `}>
            <Col  xs={12} lg={4}>
              <Col className={styles.cardstyle1}>
           
              <img
                src="/insights.svg"
                className="d-inline-block align-center"
                alt="Customer-insights"
              />
              <br></br>
              <p className={styles.cardheading}>Customer Insights</p>
              <p className={styles.cardbody}>Knowing what our customers need, want and desire is at the core of our proposition. We use gather and use this insight to better serve local businesses, communities, and customers</p>
              </Col>
            </Col>
            <Col  xs={12} lg={4}>
              <Col className={`${styles.cardstyle2} `}>
              <img
                src="/connection.svg"
                className="d-inline-block align-center"
                alt="Connection"
              />
               <br></br>
              <p className={styles.cardheading}>Connection</p>
              <p className={styles.cardbody}>Providing small SME businesses with opportunities to better connect with
their local customers</p><br></br>
             </Col>
            
            </Col>
            <Col  xs={12} lg={4}>
            <Col className={styles.cardstyle1}>
              <img
                src="/community.svg"
                className="d-inline-block align-center"
                alt="Community Togetherness "
              />
               <br></br>
              <p className={styles.cardheading}>Community Togetherness </p>
              <p className={styles.cardbody}>Provide a personalised service for customers. Allowing local business to establish a relationship with customers and visa versa</p>
              </Col>
            </Col>
          </Row>
          <Container className={`${ styles.productServiceContainer} px-4`} fluid>
            
          <p className={styles.serviceheading}>PRODUCT AND SERVICE</p>
          <br></br>
          <Row className={`${ styles.productServiceRow}  `}>
          <Col  xs={12} lg={4}>
              <img
                src="/service2.svg"
                className="d-inline-block align-center"
                alt="Connection"
              />
             <br></br><br></br>
              <p className={styles.servicebodytext}>Customers utilising Local Pocket will be able to take advantage of discounts on products and services from businesses in their local area. The customer will be able to search specifically using GPS on their mobile phone to find local businesses offering discounts on their products and services.</p><br></br>
            
            </Col>
            <Col  xs={12} lg={4}>
              <img
                src="/service1.svg"
                className="d-inline-block align-center"
                alt="Customer-insights"
              />
              <br></br><br></br>
              <p className={styles.servicebodytext}>Our service offering is an online loyalty scheme aimed specifically at local markets, connecting local businesses with local customers.</p>
            </Col>
            
            <Col  xs={12} lg={4}>
              <img
                src="/service3.svg"
                className="d-inline-block align-center"
                alt="Community Togetherness "
              />
              <br></br> <br></br>
              <p className={styles.servicebodytext}>Many business types can join the scheme, and we will work with local councils to attract local businesses to Local Pocket as a way to help boost the economy, support business success rates, increase foot traffic on high streets, generate job opportunities through increased business, and bring home the importance of shopping local.</p>
            
            </Col>
          </Row>
          </Container>
        </Container>
       
      </Container>
      </Container>
      </div>
      
    </Container>
  );
}

export default IndexMidSection;
