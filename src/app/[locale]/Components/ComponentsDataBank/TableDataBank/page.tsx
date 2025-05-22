import React from "react";
import "./TableDataBank.css";
import { RiFileExcel2Line } from "react-icons/ri";

function TableDataBank() {
  return (
    <div className="TableDataBank">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Report</th>
              <th>Date</th>
              <th>Statues</th>
              <th>Last modification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td>05 Sep 2024 12:00AM</td>
              <td>Updated</td>
              <td>05 Jun 2024 12:AM</td>
              <td><RiFileExcel2Line /></td>
            </tr>
            <tr>
              <td>Sales</td>
              <td>05 Sep 2024 12:00AM</td>
              <td>Updated</td>
              <td>05 Jun 2024 12:AM</td>
              <td><RiFileExcel2Line /></td>
            </tr>
            <tr>
              <td>Sales</td>
              <td>05 Sep 2024 12:00AM</td>
              <td>Updated</td>
              <td>05 Jun 2024 12:AM</td>
              <td><RiFileExcel2Line /></td>
            </tr>
            <tr>
              <td>Sales</td>
              <td>05 Sep 2024 12:00AM</td>
              <td>Updated</td>
              <td>05 Jun 2024 12:AM</td>
              <td><RiFileExcel2Line /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDataBank;
