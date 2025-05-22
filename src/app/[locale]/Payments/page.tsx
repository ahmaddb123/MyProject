import React from 'react'
import "./Payments.css"
import TablePayments from '../Components/ComponentsPayments/TablePayments/page'
import FilterPayments from '../Components/ComponentsPayments/Filter/page'

function Payments() {
  return (
    <div className='Payments'>
        <h1>Payments list</h1>
        <FilterPayments/>
        <TablePayments/>
    </div>
  )
}

export default Payments