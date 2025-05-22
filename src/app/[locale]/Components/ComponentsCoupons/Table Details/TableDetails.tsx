"use client";
import React, { useState } from "react";
import "./TableDetails.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOutlinePercent } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import OrdersCoupons from "../Orders/page";
import CustomersCoupons from "../Customers/page";

// تحديد نوع الخصائص (Props)
type Props = {
  setCoupons: (step: number) => void;
};

function TableDetails({ setCoupons }: Props) {
  const [showTable, setShowTable] = useState<"Orders" | "Customers">("Orders");

  return (
    <div className="TableDetails">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Total use</th>
              <th>Total sales</th>
              <th>Net sales</th>
              <th>Discount type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="tdBtn">
                <div className="devBtn">
                  <button>
                    <FiEdit />
                  </button>
                  <button onClick={() => setCoupons(1)}>
                    <MdOutlinePercent />
                  </button>
                  <button onClick={() => setCoupons(2)}>
                    <BsBoxArrowUpRight />
                  </button>
                </div>
                <button>
                  <IoIosArrowDropleft onClick={() => setCoupons(4)} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="btns">
          <button
            className={showTable === "Customers" ? "active" : ""}
            onClick={() => setShowTable("Customers")}
          >
            Customers
          </button>
          <button
            className={showTable === "Orders" ? "active" : ""}
            onClick={() => setShowTable("Orders")}
          >
            Orders
          </button>
        </div>

        {showTable === "Orders" ? <OrdersCoupons /> : <CustomersCoupons />}
      </div>
    </div>
  );
}

export default TableDetails;
