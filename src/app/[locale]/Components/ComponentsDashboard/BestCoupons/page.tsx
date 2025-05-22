"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "use-intl";
import "./BestCoupons.css";

function BestCoupons() {
  const t = useTranslations("HomePage");
  const [coupons, setCoupons] = useState([]);

  return (
    <div className="BestCoupons">
      <h1>{t("BestCoupons")}</h1>

      {coupons.map((coupon, index) => (
        <div className="box" key={index}>
          <p>{}</p>
          <p className="btn">{}</p>
          <p className="btn">{}</p>
        </div>
      ))}

      <button>Show All</button>
    </div>
  );
}

export default BestCoupons;
