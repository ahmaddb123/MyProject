import React from "react";
import "./Delivery.css";
import DeliveryBox from "../Components/ComponentsDelivery/Delivery Boxs/page";
import TableDelivery from "../Components/ComponentsDelivery/TableDelivery/page";
import FilterDelivery from "../Components/ComponentsDelivery/Filter/page";

function DeliveryToolIndicator() {
  return (
    <div className="DeliveryToolIndicator">
      <h1>Delivery Tool Indicator</h1>
      <FilterDelivery />
      <DeliveryBox />
      <TableDelivery />
    </div>
  );
}

export default DeliveryToolIndicator;
