"use client";

import { useTranslations } from "use-intl";
import "./OrderSources.css";

function OrderSources() {
  const t = useTranslations("HomePage");

  return (
    <div className="OrderSources">
      {" "}
      <h1>{t("OrderSources")}</h1>
      <button>Show All</button>
    </div>
  );
}

export default OrderSources;
