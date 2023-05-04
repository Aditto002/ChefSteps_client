import React ,{Suspense,lazy} from 'react'
import Banner from '../components/Banner'
// import ChefCards from '../components/ChefCards'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
 const ChefCards = lazy(() =>import('../components/ChefCards'))

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Gallery></Gallery>
        <Suspense fallback={<div>please wait ....</div>}>
        <ChefCards></ChefCards>
        </Suspense>
        <Services></Services>
    </div>
  )
}

export default Home