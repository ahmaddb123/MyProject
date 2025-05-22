"use client";
import React, { useState } from "react";
import "./TableCoupons.css";
import { FiEdit } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import CouponsPercentage from "../Coupons Percentage/page";
import { MdOutlinePercent } from "react-icons/md";
import NameCoupon from "../NameCoupon/page";
import TableDetails from "../Table Details/page";

function TableCoupons() {
  const selectedCoupon = useState(null);
  const [coupons, setCoupons] = useState(4);


  return (
    <div className="TableCoupons">
      {coupons == 1 ? (
        <CouponsPercentage setCoupons={setCoupons} coupon={selectedCoupon} />
      ) : coupons == 2 ? (
        <NameCoupon />
      ) : coupons == 3 ? (
        <TableDetails setCoupons={setCoupons} coupon={selectedCoupon} />
      ) : (
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
                    <button>
                      <MdOutlinePercent />
                    </button>
                    <button onClick={() => setCoupons(2)}>
                      <BsBoxArrowUpRight />
                    </button>
                  </div>
                  <button>
                    <IoIosArrowDropright />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableCoupons;
