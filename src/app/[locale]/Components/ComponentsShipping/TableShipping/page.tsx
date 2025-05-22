import React from "react";
import "./TableShipping.css";
import { LuBus } from "react-icons/lu";

function TableShipping() {
  return (
    <div className="TableShipping">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Orders</th>
              <th>Orders percentage</th>
              <th>Total</th>
              <th>Percentage of cancelled/returned orders </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <LuBus />
              </td>
              <td>Local Co.</td>
              <td>3,350</td>
              <td>20%</td>
              <td>3,350,000$</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>
                <LuBus />
              </td>
              <td>Local Co.</td>
              <td>3,350</td>
              <td>20%</td>
              <td>3,350,000$</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableShipping;
