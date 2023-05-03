import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaGrinHearts } from 'react-icons/fa';
function ChefCards() {
    const [categories, setCategories] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error =>console.error(error))
    },[])
  return (
    <div className='mt-3 mb-4'>
        <div className='mt-4 mx-auto'>Chinese Chef</div>
    {
    
        <Container>
    <Row xs={1} md={2} className="g-4">
      {categories.map((categorie) => (
    <Col key={categorie.id}>
      <Card>
        <Card.Img variant="top" src={categorie.picture} />
        <Card.Body>
          <Card.Title>{categorie.name}</Card.Title>
          <Card.Text>
          Experience : {categorie.experience}
          </Card.Text>
          <Card.Text>
          <FaGrinHearts /> {categorie.like}
          </Card.Text>
        </Card.Body>
        <Button variant="outline-primary">View Recipes</Button>
      </Card>
    </Col>
  ))}
</Row>
  </Container>

        }
    
</div>
  )
}

export default ChefCards