"use client";

import { useTranslations } from "use-intl";
import "./BestCoupons.css";

function BestCoupons() {
  const t = useTranslations("HomePage");


  return (
    <div className="BestCoupons">
      <h1>{t("BestCoupons")}</h1>

        <div className="box">
          <p>{}</p>
          <p className="btn">{}</p>
          <p className="btn">{}</p>
        </div>

      <button>Show All</button>
    </div>
  );
}

export default BestCoupons;
