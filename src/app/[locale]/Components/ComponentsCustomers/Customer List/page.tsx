"use client";
import "./CustomerList.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CustomerList() {


  return (
    <div className="CustomerList">
      <div className="table-wrappe">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Sources Orders</th>
              <th>Orders</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <DropdownButton title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
