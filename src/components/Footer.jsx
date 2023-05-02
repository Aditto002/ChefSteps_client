import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="bg-black py-4 text-white">
    <Container>
      <Row>
        <Col md={4}>
          <h5>CHEFSTEPS</h5>
          <p>Indulge in the flavors of China at our authentic Chinese restaurant. Our skilled chefs use traditional techniques and fresh ingredients to prepare each dish with care, ensuring a memorable dining experience. From savory soups to spicy stir-fries, our menu offers a wide range of options for all tastes. Join us for lunch or dinner and discover the true taste of Chinese cuisine.</p>
        </Col>
        <Col md={4}>
          <h5>Links</h5>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
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