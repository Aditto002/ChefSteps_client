import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

function ViewCards({categorychef}) {
    
const {recipe_name,ingredients,image,cooking_method,rating,_id } = categorychef;
  return (
    <Row xs={1} md={1} className="g-4">
      <Container style={{width:"900px"}} className='mt-4 mb-4'>
        <Col >
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{recipe_name}</Card.Title>
              <Card.Text>
              <h4>Ingredients :</h4> {ingredients}
              </Card.Text>
              <Card.Text>
           <h4>cooking method : </h4>{cooking_method}
              </Card.Text>
              <Card.Text>
             <div  className='flex-grow-1'>
             <Rating
              placeholderRating={rating}
              readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar></FaStar>}></Rating>  <span> {rating}</span>
             </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Container>
    </Row>
  )
}

export default ViewCards