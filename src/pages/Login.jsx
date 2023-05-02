import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Card className="w-100 h-100 mt-5 mb-5 mx-auto" style={{ maxWidth: '600px', maxHeight: '800px' }}>
      <Card.Body className="d-flex flex-column justify-content-center mt-5 mb-5 ">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Login
          </Button>

          <Button variant="danger" className="my-4 ms-2" block>
            Sign in with Google
          </Button>

          <Button variant="dark" className="mb-1 ms-2" block>
            Sign in with Github
          </Button>
          <br />
          <Link to='/register'>Register?</Link>
        </Form>
      </Card.Body>
    </Card>
)}

export default Login