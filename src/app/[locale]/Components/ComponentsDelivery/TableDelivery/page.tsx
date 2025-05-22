import React from "react";
import "./TableDelivery.css";

function TableDelivery() {
  return (
    <div className="TableDelivery">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Product code</th>
              <th>Payment method</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02 Nov 2024 12:PM</td>
              <td>Flower vase</td>
              <td>154AB</td>
              <td>PayPal</td>
              <td>James bond</td>
              <td>50$</td>
              <td><span>Completed</span></td>
            </tr>
            <tr>
              <td>02 Nov 2024 12:PM</td>
              <td>Flower vase</td>
              <td>154AB</td>
              <td>PayPal</td>
              <td>James bond</td>
              <td>50$</td>
              <td><span>Completed</span></td>
            </tr>
            <tr>
              <td>02 Nov 2024 12:PM</td>
              <td>Flower vase</td>
              <td>154AB</td>
              <td>PayPal</td>
              <td>James bond</td>
              <td>50$</td>
              <td><span>Completed</span></td>
            </tr>
            <tr>
              <td>02 Nov 2024 12:PM</td>
              <td>Flower vase</td>
              <td>154AB</td>
              <td>PayPal</td>
              <td>James bond</td>
              <td>50$</td>
              <td><span>Completed</span></td>
            </tr>
            <tr>
              <td>02 Nov 2024 12:PM</td>
              <td>Flower vase</td>
              <td>154AB</td>
              <td>PayPal</td>
              <td>James bond</td>
              <td>50$</td>
              <td><span>Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDelivery;
