import React from "react";
import "./CustomersCoupons.css";

function CustomersCoupons() {
  return (
    <div className="CustomersCoupons">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Order Q </th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ahmad Dyab</td>
              <td>09372893</td>
              <td>admin@gmail.com</td>
              <td>2</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Ahmad Dyab</td>
              <td>09372893</td>
              <td>admin@gmail.com</td>
              <td>2</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Ahmad Dyab</td>
              <td>09372893</td>
              <td>admin@gmail.com</td>
              <td>2</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomersCoupons;
