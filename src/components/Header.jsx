import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../providers/AuthProbider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Header() {
  const {user} = useContext(AuthContext) 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">CHEFSTEPS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
        <Nav>
          {user && <Nav.Link href=""><FaUserCircle style={{fontSixe :"2rem"}}></FaUserCircle></Nav.Link>}
        </Nav>
        <Nav>
          <Nav.Link href="">{
            user ? <Link to='/login'><Button variant="dark">LogOut</Button></Link>:<div> <Link to='/login'><Button variant="dark">Login</Button></Link><Link to='/register'><Button variant="dark">Register</Button></Link></div>
}</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header