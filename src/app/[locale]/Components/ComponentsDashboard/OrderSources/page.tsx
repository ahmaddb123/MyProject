import React, { useEffect, useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { useTranslations } from "use-intl";
import "./OrderSources.css"

function OrderSources() {
  const t = useTranslations("HomePage");
    const [order, setOrder] = useState([]);
  

  return (
    <div className="OrderSources">
      {" "}
      <h1>{t("OrderSources")}</h1>


      <button>Show All</button>
    </div>
  );
}

export default OrderSources;
