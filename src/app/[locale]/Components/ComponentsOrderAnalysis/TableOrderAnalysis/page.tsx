"use client"
import React, { useState, useRef } from "react";
import "./TableOrder.css";

const TableOrder = () => {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const data = [
    {
      id: "00001",
      name: "Hussam Zina",
      address: "Makkah, Al-Amin Street",
      date: "04 Sep 2024 12:53PM",
      method: "PayPal",
      total: "30,000$",
      actionTime: "05 Sep 2024 3:00PM",
      status: "Completed",
      orders: [
        { product: "Flower vase", price: "999.29$", qty: "x1", disc: "5%", total: "949.32$" },
        { product: "Flower vase", price: "999.29$", qty: "x1", disc: "5%", total: "949.32$" },
      ],
      summary: {
        subtotal: "2,847.96$",
        shipping: "5.50$",
        discount: "150.32$",
        total: "30,000.00$",
      },
    },
    {
      id: "00002",
      name: "Hussam Zina",
      address: "Makkah, Al-Amin Street",
      date: "04 Sep 2024 12:53PM",
      method: "PayPal",
      total: "30,000$",
      actionTime: "",
      status: "Pending",
      orders: [
        { product: "Gift box", price: "500$", qty: "x2", disc: "10%", total: "900$" },
      ],
      summary: {
        subtotal: "1000.00$",
        shipping: "4.00$",
        discount: "100.00$",
        total: "904.00$",
      },
    },
  ];

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table className="order-table">
          <thead>
            <tr className="theadTh">
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Request date</th>
              <th>Payment Method</th>
              <th>Total</th>
              <th>Action time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="main-row" onClick={() => toggleOpen(order.id)}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{order.method}</td>
                  <td>{order.total}</td>
                  <td>{order.actionTime}</td>
                  <td className="status-cell">
                    <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                    <span className={`arrow ${openId === order.id ? "rotate" : ""}`}>⏷</span>
                  </td>
                </tr>

                <tr>
                  <td colSpan="8" className="accordion-wrapper">
                    <div
                      ref={(el) => (contentRefs.current[order.id] = el)}
                      className={`accordion-content ${openId === order.id ? "open" : ""}`}
                    >
                      {openId === order.id && (
                        <table className="inner-table">
                          <thead>
                            <tr>
                              <th>Name PRODUCT</th>
                              <th>SKU</th>
                              <th>TOTAL</th>
                              <th>Discount Price</th>
                              <th>Price After Discount</th>
                              <th>Coupon</th>
                              <th>QTY</th>
                              <th>DISC.</th>
                              <th>Coupon Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.orders.map((item, i) => (
                              <tr key={i}>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td className="discount">{item.disc}</td>
                                <td>{item.total}</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                              </tr>
                            ))}
                            <tr className="summary">
                              <td colSpan="3"></td>
                              <td colSpan="3" className="summary-values">
                                <div>Subtotal <span>{order.summary.subtotal}</span></div>
                                <div>Shipping <span>{order.summary.shipping}</span></div>
                                <div className="discount">Discount <span>{order.summary.discount}</span></div>
                                <div className="discount">Tax <span>{order.summary.discount}</span></div>
                                <div className="total">Total <span>{order.summary.total}</span></div>
                              </td>
                              <td colSpan="3"></td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOrder;
