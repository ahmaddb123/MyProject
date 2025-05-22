"use client";
import React, { useState } from "react";
import "./Home.css";
import Header from "../Components/Header/page";
import Bar from "../Components/Bar/Bar";
import Dashboard from "../Dashboard/page";
import OrderAnalysis from "../Order Analysis/page";
import Product from "../Product/page";
import Customers from "../Customers/page";
import Coupons from "../Coupons/page";
import Countries from "../Countries/page";
import Payments from "../Payments/page";
import Shipping from "../Shipping/page";
import DeliveryToolIndicator from "../Delivery tool indicator/Page";
import DataBank from "../DataBank/page";
import Retarget from "../Retarget/page";
import Settings from "../Settings/page";

function Home() {
  const [active, setActive] = useState(false);
  const [section, setSection] = useState("Dashboard");

  return (
    <div className="home">
      <Bar active={active} setActive={setActive} setSection={setSection} />
      <div className="container">
        <Header setActive={setActive} setSection={setSection} />
        {section === "Dashboard" && <Dashboard />}
        {section === "Order Analysis" && <OrderAnalysis />}
        {section === "Product" && <Product />}
        {section === "Customers" && <Customers />}
        {section === "Coupons" && <Coupons />}
        {section === "Countries" && <Countries />}
        {section === "Payments" && <Payments />}
        {section === "Shipping" && <Shipping />}
        {section === "Delivery tool indicator" && <DeliveryToolIndicator />}
        {section === "Data bank" && <DataBank />}
        {section === "Retarget" && <Retarget />}
        {section === "Settings" && <Settings />}
      </div>
    </div>
  );
}

export default Home;
