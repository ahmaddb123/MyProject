import React from "react";
import ShippingCompanies from "../ShippingCompanies/ShippingCompanies";
import "./Section3.css";
import PaymentMethods from "../PaymentMethods/page";

// ✅ تعريف نوع الـ props
interface Section3Props {
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

function Section3({ setSection }: Section3Props) {
  return (
    <div className="Section3">
      <div className="box-section1">
        <ShippingCompanies setSection={setSection} />
        <PaymentMethods />
      </div>
    </div>
  );
}

export default Section3;
