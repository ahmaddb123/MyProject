import React from "react";
import "./OrderAnalysis.css"
import BoxDashboard from "../Components/ComponentsDashboard/BoxDashboard/page";
import LineChartComponent from "../Components/ComponentsDashboard/ChartLine/page";
import MyTable from "../Components/ComponentsOrderAnalysis/TableOrderAnalysis/page";
import FilterOrderAnalysis from "../Components/ComponentsOrderAnalysis/Filter/page";

function OrderAnalysis() {
  return (
    <div className="OrderAnalysis">
      <h1>Order Analysis</h1>
      <FilterOrderAnalysis />
      <BoxDashboard />
      <LineChartComponent />
      <MyTable />
    </div>
  );
}

export default OrderAnalysis;
