import React from 'react'
import "./Shipping.css"
import TableShipping from '../Components/ComponentsShipping/TableShipping/page'
import FilterShipping from '../Components/ComponentsShipping/Filter/page'

function Shipping() {
  return (
    <div className='Shipping'>
        <h1>Shipping List</h1>
        <FilterShipping/>
        <TableShipping/>
    </div>
  )
}

export default Shipping