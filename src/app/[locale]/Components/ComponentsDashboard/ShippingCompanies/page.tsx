import React from "react";
import { FaImage } from "react-icons/fa";
import styles from "./ShippingCompanies.module.css";
import { useTranslations } from "next-intl";

function ShippingCompanies() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.ShippingCompanies}>
      <h1>{t("ShippingCompanies")}</h1>
      <div>
        <div className={styles.box}>
          <p className={styles.p}>
            <FaImage /> Shipping Co.
          </p>
          <p className={styles.btn}>50 Order</p>
          <p className={styles.btn}>50%</p>
        </div>
        <div className={styles.box}>
          <p className={styles.p}>
            <FaImage /> Shipping Co.
          </p>
          <p className={styles.btn}>50 Order</p>
          <p className={styles.btn}>50%</p>
        </div>
        <div className={styles.box}>
          <p className={styles.p}>
            <FaImage />
            Shipping Co.
          </p>
          <p className={styles.btn}>50 Order</p>
          <p className={styles.btn}>50%</p>
        </div>
        <div className={styles.box}>
          <p className={styles.p}>
            <FaImage />
            Shipping Co.
          </p>
          <p className={styles.btn}>50 Order</p>
          <p className={styles.btn}>50%</p>
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default ShippingCompanies;
