import React from 'react'
import "./TablePayments.css"
import { FaImage } from 'react-icons/fa'

function TablePayments() {
  return (
    <div className='TablePayments'>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Operations </th>
                    <th>percentage</th>
                    <th>Total</th>
                    <th>Yearly revenue</th>
                    <th>Cancelled/Refund requests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    <FaImage />
                    </td>
                    <td>PayPal</td>
                    <td>3,350</td>
                    <td>20%</td>
                    <td>3,350,000$</td>
                    <td>350,000$%</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>
                    <FaImage />
                    </td>
                    <td>PayPal</td>
                    <td>3,350</td>
                    <td>20%</td>
                    <td>3,350,000$</td>
                    <td>350,000$%</td>
                    <td>5%</td>
                  </tr>

                </tbody>
              </table>
            </div>
    </div>
  )
}

export default TablePayments