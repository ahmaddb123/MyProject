import React from "react";
import { useTranslations } from "use-intl";
import "./BestCites.css";
import { FaFlag } from "react-icons/fa";

function BestCites() {
  const t = useTranslations("HomePage");
  return (
    <div className="BestCites">
      {" "}
      <h1>{t("BestCites")}</h1>
      <div className="box">
        <p className="p">
          <FaFlag /> Egypt
        </p>
        <p className="btn">50 Order</p>
        <p className="btn">50%</p>
      </div>
      <div className="box">
        <p className="p">
          <FaFlag /> Egypt
        </p>
        <p className="btn">50 Order</p>
        <p className="btn">50%</p>
      </div>
      <div className="box">
        <p className="p">
          <FaFlag />
          Egypt
        </p>
        <p className="btn">50 Order</p>
        <p className="btn">50%</p>
      </div>
      <div className="box">
        <p className="p">
          <FaFlag />
          Egypt
        </p>
        <p className="btn">50 Order</p>
        <p className="btn">50%</p>
      </div>
      <button>Show All</button>
    </div>
  );
}

export default BestCites;
