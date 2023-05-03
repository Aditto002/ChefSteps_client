import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ViewCards from './ViewCards';



function Categories() {
    const categorychefs = useLoaderData();
    return (
      <div><h3 >Totle Recips : {categorychefs.length}</h3>
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