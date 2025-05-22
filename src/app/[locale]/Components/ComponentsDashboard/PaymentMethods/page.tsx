import React from "react";
import { FaImage } from "react-icons/fa";
import "./PaymentMethods.css"
import { useTranslations } from "use-intl";

function PaymentMethods() {
      const t = useTranslations("HomePage");
  return (
    <div className="PaymentMethods">
        <h1>{t("PaymentMethods")}</h1>
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

export default PaymentMethods;
