import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthProbider, { AuthContext } from '../providers/AuthProbider';

function Regiter() {
    // const {createUser} = useContext(AuthProbider);
    const {createUser} =useContext(AuthContext)
    const [error , setError] = useState('')
    const handeRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo =form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);
        
        setError('')
        if(password.length<6){
            setError('password must be 6 characters')
            return
          }
        createUser(email,password)
        .then(result =>{
            const createUser = result.user;
            form.reset();
            console.log(createUser);
        })
        .catch(error=>{
            console.log(error)
        })
    }


  return (
    <Card className="w-100 h-100 mt-5 mb-5 mx-auto" style={{ maxWidth: '600px', maxHeight: '800px' }}>
    <Card.Body className="d-flex flex-column justify-content-center mt-5 mb-5 ">
      <h3>Please Register</h3>
      <Form onSubmit={handeRegister}>
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
      <p className='text-danger'>{error}</p>
    </Card.Body>
  </Card>
  )
}

export default Regiter