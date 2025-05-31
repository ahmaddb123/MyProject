"use client";

import { useTranslations } from "next-intl";
import styles from "./BestCoupons.module.css";

function BestCoupons() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.BestCoupons}>
      <h1>{t("BestCoupons")}</h1>

      <div className={styles.box}>
        <p>{/* محتوى هنا */}</p>
        <p className={styles.btn}>{/* محتوى هنا */}</p>
        <p className={styles.btn}>{/* محتوى هنا */}</p>
      </div>

      <button>Show All</button>
    </div>
  );
}

export default BestCoupons;
