"use client";

import { useTranslations } from "next-intl";
import styles from "./OrderSources.module.css";

function OrderSources() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.OrderSources}>
      <h1>{t("OrderSources")}</h1>
      <button>Show All</button>
    </div>
  );
}

export default OrderSources;
