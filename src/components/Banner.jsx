import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
        style={{ height: '700px' }}
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/chef-adds-salt-while-cooking-eggs-pan_192985-2802.jpg?size=626&ext=jpg&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr"
        />
        <Carousel.Caption>
          <h3>Exploring the Culinary Wonders of the East</h3>
          <p>Join us on a journey through China's diverse culinary landscape and discover the traditions, flavors, and techniques that make Chinese cuisine one of the world's most beloved.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{ height: '700px' }}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/life-style_1122-1996.jpg?w=1060&t=st=1683004054~exp=1683004654~hmac=c1a541ccc61e3f0b2472cf74679cb81ddcb12bb334437e301e175c8565dd4f2e"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Art of Chinese Cooking</h3>
          <p>Experience the magic of Chinese cooking as our expert chefs guide you through the steps of creating authentic dishes bursting with flavor and texture.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{ height: '700px' }}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/mid-shot-chef-mixing-salad-ingredients_23-2148794093.jpg?size=626&ext=jpg&ga=GA1.1.1354603693.1683004017&semt=robertav1_2_sidr"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> A Celebration of Chinese Cuisin</h3>
          <p>
          We invite you to savor the richness of Chinese cuisine and enjoy a dining experience like no other. From dim sum to Peking duck, our menu is a tribute to the vibrant culture and culinary heritage of China.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner