import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Gallery() {
  return (
    <section>
    <Container className='mt-4 mb-5 '>
        <h1 className='mb-3'>Gallery</h1>

        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.chefzhangusa.com/wp-content/uploads/chefzhangusa.com/2021/09/l01.jpg" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://www.chefzhangusa.com/wp-content/uploads/chefzhangusa.com/2021/09/l02.jpg" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://www.chefzhangusa.com/wp-content/uploads/chefzhangusa.com/2021/09/l03.jpg" />
      </Card>
    </CardGroup>


    </Container>
    </section>
  )
}

export default Gallery