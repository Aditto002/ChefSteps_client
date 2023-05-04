import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaGrinHearts } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ChefCards() {

  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };




    const [categories, setCategories] =useState([]);
    useEffect(()=>{
        fetch('https://chefsteps-server-aditto002.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error =>console.error(error))
    },[])
  return (
    <div className='mt-3 mb-4'>
    {
      
      <Container>
          <h1 className='mt-4 mx-auto mb-4'>Chinese Chef</h1>
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
        <Link to={`/category/${categorie.id}`}>
        <Button variant="outline-primary">View Recipes</Button>
        
        </Link>
        <Button variant="primary" className='ms-3' onClick={handleClick} disabled={disabled}>
      {disabled ? 'Favourite' : 'Favourite'}
    </Button>
        </Card.Body>
        
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