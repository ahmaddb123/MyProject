"use clint";
import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { fetchWithAuth } from "../../axios/page";

function CustomerList() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchWithAuth(
          "http://46.202.135.90:81/en/api/customers/customers-list/"
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getData();
  }, []);

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
            {Array.isArray(data) &&
              data.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.number}</td>
                  <td>
                    <DropdownButton
                      id={`dropdown-${index}`}
                      title="Dropdown button"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                  <td>{customer.orders}</td>
                  <td>{customer.total}$</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
