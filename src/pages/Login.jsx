import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProbider';

function Login() {
  const {signIn ,googleLogIn,gitLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const handleGit =()=>{
    gitLogin()
    .then((result) => {
      const user = result.user;
      console.log(user);

 })
 .catch((error) => {
   console.log(error)
 })
  }

  const handleGoogle =()=>{
    googleLogIn()
    .then((result) => {
         const user = result.user;
         console.log(user);

    })
    .catch((error) => {
      console.log(error)
    })

  }

const handleLogin = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password);
   



  signIn(email,password)
  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
    form.reset();
    navigate(from);
  })
  .catch(error =>{
    console.log(error);
  })
}
    
  return (
    <Card className="w-100 h-100 mt-5 mb-5 mx-auto" style={{ maxWidth: '600px', maxHeight: '800px' }}>
      <Card.Body className="d-flex flex-column justify-content-center mt-5 mb-5 ">
        <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" required placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required name="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Login
          </Button>

          <Button onClick={handleGoogle} variant="danger" className="my-4 ms-2" block>
            Sign in with Google
          </Button>

          <Button variant="dark" onClick={handleGit} className="mb-1 ms-2" block>
            Sign in with Github
          </Button>
          <br />
          <Link to='/register'>Register?</Link>
        </Form>
      </Card.Body>
    </Card>
)}

export default Login