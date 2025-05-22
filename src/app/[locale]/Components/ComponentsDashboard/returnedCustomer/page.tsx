import React from "react";
import { useTranslations } from "use-intl";
import ChartCircle from "../ChartCircle/ChartCircle";
import "./returnedCustomer.css";

function ReturnedCustomer() {
  const t = useTranslations("HomePage");
  return (
    <div className="ReturnedCustomer">
      <h1>{t("returnedCustomer")}</h1>
      <ChartCircle percentage={44} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqu
      </p>
      <button>Show All</button>
    </div>
  );
}

export default ReturnedCustomer;
