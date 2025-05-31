import React from "react";
import { useTranslations } from "next-intl";
import styles from "./BestCites.module.css";
import { FaFlag } from "react-icons/fa";

function BestCites() {
  const t = useTranslations("HomePage");
  return (
    <div className={styles.BestCites}>
      <h1>{t("BestCites")}</h1>
      <div className={styles.box}>
        <p className={styles.p}>
          <FaFlag /> Egypt
        </p>
        <p className={styles.btn}>50 Order</p>
        <p className={styles.btn}>50%</p>
      </div>
      <div className={styles.box}>
        <p className={styles.p}>
          <FaFlag /> Egypt
        </p>
        <p className={styles.btn}>50 Order</p>
        <p className={styles.btn}>50%</p>
      </div>
      <div className={styles.box}>
        <p className={styles.p}>
          <FaFlag />
          Egypt
        </p>
        <p className={styles.btn}>50 Order</p>
        <p className={styles.btn}>50%</p>
      </div>
      <div className={styles.box}>
        <p className={styles.p}>
          <FaFlag />
          Egypt
        </p>
        <p className={styles.btn}>50 Order</p>
        <p className={styles.btn}>50%</p>
      </div>
      <button>Show All</button>
    </div>
  );
}

export default BestCites;
