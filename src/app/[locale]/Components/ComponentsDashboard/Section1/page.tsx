import React from "react";
import "./Section.css";
import BarChart from "../BestDays/page";
import BestCoupons from "../BestCoupons/page";
import "./Section.css";
import OrderSources from "../OrderSources/page";
import BestCites from "../BestCites/page";

function Section1() {
  return (
    <div className="Section1">
      <div className="box-section1">
        <BarChart />
        <BestCoupons />
      </div>
      <div className="box-section1">
        <OrderSources />
        <BestCites />
      </div>
    </div>
  );
}

export default Section1;
