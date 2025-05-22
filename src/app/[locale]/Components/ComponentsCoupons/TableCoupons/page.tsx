"use clint";
import React, { useEffect, useState } from "react";
import "./TableCoupons.css";
import { FiEdit } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import CouponsPercentage from "../Coupons Percentage/page";
import { MdOutlinePercent } from "react-icons/md";
import NameCoupon from "../NameCoupon/page";
import TableDetails from "../Table Details/page";
import { fetchWithAuth } from "../../axios/page";

function TableCoupons() {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [coupons, setCoupons] = useState(4);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchWithAuth(
          "http://46.202.135.90:81/en/api/coupons/coupons-list/"
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getData();
  }, []);
  console.log(data);

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
              {Array.isArray(data) &&
                data.map((coupon, index) => (
                  <tr key={index}>
                    <td>{coupon.name}</td>
                    <td>{coupon.code}</td>
                    <td>{coupon.total_use}</td>
                    <td>{coupon.total_sales}</td>
                    <td>{coupon.net_sales}</td>
                    <td>{coupon.discount_type}</td>
                    <td className="tdBtn">
                      <div className="devBtn">
                        <button>
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCoupon(coupon);
                            setCoupons(1);
                          }}
                        >
                          <MdOutlinePercent />
                        </button>
                        <button onClick={() => setCoupons(2)}>
                          <BsBoxArrowUpRight />
                        </button>
                      </div>
                      <button>
                        <IoIosArrowDropright
                          onClick={() => {
                            setSelectedCoupon(coupon);
                            setCoupons(3);
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableCoupons;
