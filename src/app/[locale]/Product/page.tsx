import React from 'react'
import "./Product.css"
import BarChartProducts from '../Components/ComponentsProduct/BarChartProduct/page'
import TableProduct from '../Components/ComponentsProduct/TableProduct/Page'
import FilterProduct from '../Components/ComponentsProduct/Filter/page'

function Product() {
  return (
    <div className='Product'>
        <h1>Product</h1>
        <FilterProduct/>
        <BarChartProducts/>
        <TableProduct/>
    </div>
  )
}

export default Product