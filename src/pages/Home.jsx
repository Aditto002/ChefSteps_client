import React from 'react'
import Banner from '../components/Banner'
import ChefCards from '../components/ChefCards'
import Gallery from '../components/Gallery'
import Services from '../components/Services'


function Home() {
  return (
    <div>
        <Banner></Banner>
        <Gallery></Gallery>
        <ChefCards></ChefCards>
        <Services></Services>
    </div>
  )
}

export default Home