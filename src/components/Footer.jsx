import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="bg-black py-4 text-white">
    <Container>
      <Row>
        <Col md={4}>
          <h5>CHEFSTEPS</h5>
          <p>Indulge in the flavors of China at our authentic Chinese restaurant. Our skilled chefs use traditional techniques and fresh ingredients to prepare each dish with care, ensuring a memorable dining experience...</p>
        </Col>
        <Col md={4}>
          <h5>connect with us</h5>
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.youtube.com/">YouTube</a></li>
            <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contact Us</h5>
          <ul>
            <li>123 Main St</li>
            <li>City, State Zip</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@company.com</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer