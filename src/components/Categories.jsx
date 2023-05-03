import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ViewCards from './ViewCards';



function Categories() {
    const categorychefs = useLoaderData();
    return (
      <div>Categories : {categorychefs.length}
      {
        categorychefs.map(categorychef => <ViewCards 
        key={categorychef._id}
        categorychef= {categorychef}></ViewCards>
        )
      }
      </div>
      
  )
}

export default Categories