import React from "react";
import { FaImage } from "react-icons/fa";
import styles from "./PaymentMethods.module.css";
import { useTranslations } from "next-intl";

function PaymentMethods() {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.PaymentMethods}>
      <h1>{t("PaymentMethods")}</h1>
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

export default PaymentMethods;
