import React from 'react'
import TableCoupons from '../Components/ComponentsCoupons/TableCoupons/page'
import "./Coupons.css"
import FilterCoupons from '../Components/ComponentsCoupons/Filter/page'

function Coupons() {
  return (
    <div className="Coupons">
        <h1>Coupons List</h1>
        <FilterCoupons/>
        <TableCoupons/>
    </div>
  )
}

export default Coupons