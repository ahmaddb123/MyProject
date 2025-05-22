import React from 'react'
import "./Customers.css"
import CustomerList from '../Components/ComponentsCustomers/Customer List/page'
import FilterCustomers from '../Components/ComponentsCustomers/Filter/page'

function Customers() {
  return (
    <div className='Customers'>
      <h1>Customer List</h1>
      <FilterCustomers/>
      <CustomerList/>
    </div>
  )
}

export default Customers