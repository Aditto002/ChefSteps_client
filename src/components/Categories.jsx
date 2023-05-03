import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Categories() {
    const categorychef = useLoaderData();
  return (
    <div>Categories : {categorychef.length}</div>
  )
}

export default Categories