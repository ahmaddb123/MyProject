import React from "react";
import "./TableCountries.css";
import { CiFlag1 } from "react-icons/ci";

function TableCountries() {
  return (
    <div className="TableCountries">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Country</th>
              <th>City</th>
              <th>Total sales</th>
              <th>Net sales</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CiFlag1 />
              </td>
              <td>Syria</td>
              <td>Damascus</td>
              <td>5,500,000$</td>
              <td>3,350,000$</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>
                <CiFlag1 />
              </td>
              <td>Syria</td>
              <td>Damascus</td>
              <td>5,500,000$</td>
              <td>3,350,000$</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCountries;
