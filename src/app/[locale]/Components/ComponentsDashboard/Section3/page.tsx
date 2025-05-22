import React from 'react'
import ShippingCompanies from '../ShippingCompanies/page'
import "./Section3.css"
import PaymentMethods from '../PaymentMethods/page'

function Section3() {
  return (
    <div className='Section3'>
      <div className="box-section1">
        <ShippingCompanies/>
        <PaymentMethods/>
      </div>

    </div>
  )
}

export default Section3