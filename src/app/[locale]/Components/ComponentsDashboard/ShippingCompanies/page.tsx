import React from "react";
import { FaImage } from "react-icons/fa";
import "./ShippingCompanies.css"
import { useTranslations } from "next-intl";

function ShippingCompanies() {
      const t = useTranslations("HomePage");
  return (
    <div className="ShippingCompanies">
        <h1>{t("ShippingCompanies")}</h1>
      <div>
        <div className="box">
          <p className="p">
            <FaImage /> Shipping Co.
          </p>
          <p className="btn">50 Order</p>
          <p className="btn">50%</p>
        </div>
        <div className="box">
          <p className="p">
            <FaImage /> Shipping Co.
          </p>
          <p className="btn">50 Order</p>
          <p className="btn">50%</p>
        </div>
        <div className="box">
          <p className="p">
            <FaImage />
            Shipping Co.
          </p>
          <p className="btn">50 Order</p>
          <p className="btn">50%</p>
        </div>
        <div className="box">
          <p className="p">
            <FaImage />
            Shipping Co.
          </p>
          <p className="btn">50 Order</p>
          <p className="btn">50%</p>
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default ShippingCompanies;
