"use client"
import React, { useState } from "react";
import "./TableSettings.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import AddSettings from "../Add Settings/AddSettings";

function TableSettings() {
  const [Add, setAdd] = useState(false)
  return (
    <div className="TableSettings">
        <div className="divAdd">
        <button className="btnAdd" onClick={() => setAdd(true)}>Add New</button>
        </div>
        <div className="TableSettings-container">
        <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <IoPersonCircleOutline />
              </td>
              <td>Jess Saris</td>
              <td>r*********@gmail.com</td>
              <td>04 Sep 2019 5:27:50 AM</td>
              <td>Was online 5min ago</td>
              <td>Super Admin</td>
              <td>
                <div className="devBtn">
                  <button>
                    <FiEdit />
                  </button>
                  <button>
                    <FaTrashAlt className="Trash"/>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <IoPersonCircleOutline />
              </td>
              <td>Jess Saris</td>
              <td>r*********@gmail.com</td>
              <td>04 Sep 2019 5:27:50 AM</td>
              <td>Was online 5min ago</td>
              <td>Super Admin</td>
              <td>
                <div className="devBtn">
                  <button>
                    <FiEdit />
                  </button>
                  <button>
                    <FaTrashAlt className="Trash"/>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <IoPersonCircleOutline />
              </td>
              <td>Jess Saris</td>
              <td>r*********@gmail.com</td>
              <td>04 Sep 2019 5:27:50 AM</td>
              <td>Was online 5min ago</td>
              <td>Super Admin</td>
              <td>
                <div className="devBtn">
                  <button>
                    <FiEdit />
                  </button>
                  <button>
                  <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
        {Add && <AddSettings setAdd={setAdd}/>}
    </div>
  );
}

export default TableSettings;
