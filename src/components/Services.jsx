import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  return (
    <Container className='mb-5'>
     <h1 className='mt-4 mb-4'>Our Services</h1>
       
     <CardGroup >
      <Card >
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?size=626&ext=jpg&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr" />
        <Card.Body>
          <Card.Title>Delivery Services</Card.Title>
          <Card.Text>
          Delivery is the fastest courier service. We provide tech-first logistics support to both online and offline businesses.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='ms-4'>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/credit-card-payment-concept-illustration_114360-584.jpg?size=626&ext=jpg&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr "/>
        <Card.Body>
          <Card.Title>Online Payment</Card.Title>
          <Card.Text>
            You pay your bil Online.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='ms-4'>
        <Card.Img variant="top" src="https://img.freepik.com/free-psd/restaurant-landing-page-template-with-leaves-design_23-2149483386.jpg?size=626&ext=jpg&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr" />
        <Card.Body>
          <Card.Title>Best Food</Card.Title>
          <Card.Text>
            We give you the best food services.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        
    </Container>
  )
}

export default Services