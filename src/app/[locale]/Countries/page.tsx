import React from 'react'
import "./Countries.css"

import TableCountries from '../Components/ComponentsCountries/TableCountries/page'
import FilterCountries from '../Components/ComponentsCountries/Filter/page'

function Countries() {
  return (
    <div className='Countries'>
        <h1>Countries List</h1>
        <FilterCountries/>
        <TableCountries/>
    </div>
  )
}

export default Countries