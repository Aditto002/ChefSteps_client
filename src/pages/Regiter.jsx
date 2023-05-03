import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Regiter() {
  return (
    <Card className="w-100 h-100 mt-5 mb-5 mx-auto" style={{ maxWidth: '600px', maxHeight: '800px' }}>
    <Card.Body className="d-flex flex-column justify-content-center mt-5 mb-5 ">
      <h3>Please Register</h3>
      <Form>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>
        <Form.Group >
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" required placeholder="Enter URL" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" block className='mt-2'>
          Register
        </Button>
        <br />
        <Link to='/login'>Login?</Link>
      </Form>
    </Card.Body>
  </Card>
  )
}

export default Regiter