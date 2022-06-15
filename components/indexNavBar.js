import React from "react";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Styling.
import styles from '../styles/index_nav_bar.module.css'
export default function IndexNavBar() {
  return (
    <Container className={styles.navbar} fluid  >
      
      
    <Navbar className={styles.navbar} collapseOnSelect expand="lg"  variant="dark">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home"><img
        src="/logo.svg"
       
        className="d-inline-block align-top"
        alt="Local Pocket"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link  className={styles.navlink} href="/mybusiness">My Business</Nav.Link>
            <Nav.Link  className={styles.navlink} href="/localpocket">
            My Local Pocket
            </Nav.Link>
            <Nav.Link  className={styles.navlink}  href="mailto:info@localpocket-app.co.uk">
            Contact Us
            </Nav.Link>
            <Nav.Link  className={styles.navlink}  href="#">
            Download
            </Nav.Link>
            <Button className={styles.primaryButton} >
            Vendor Login
                </Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </Container>
  );
}