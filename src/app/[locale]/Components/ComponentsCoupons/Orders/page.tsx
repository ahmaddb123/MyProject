import React from "react";
import "./OrdersCoupons.css";

function OrdersCoupons() {
  return (
    <div className="OrdersCoupons">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Total </th>
              <th>Payment way</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>466</td>
              <td>$</td>
              <td>Ahmad Dyab</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersCoupons;
