import React, { useEffect, useState } from "react";
import styles from "./ShippingCompanies.module.css";
import { useTranslations } from "next-intl";
import axiosInstance from "../../axios/axiosInstance";

// ✅ نوع بيانات العنصر الواحد في المصفوفة
interface ShippingCompany {
  id: number;
  shipping_company_name: string;
  orders_count: number;
  usage_percentage: number;
}

// ✅ نوع البروبس
interface ShippingCompaniesProps {
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

function ShippingCompanies({ setSection }: ShippingCompaniesProps) {
  const t = useTranslations("HomePage");
  const [ShippingData, setShippingData] = useState<ShippingCompany[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/dashboard/shipping-companies/")
      .then((res) => {
        console.log(res.data);
        setShippingData(res.data.shipping_compnaies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.ShippingCompanies}>
      <h1>{t("ShippingCompanies")}</h1>
      <div>
        {ShippingData.map((item) => (
          <div key={item.id} className={styles.box}>
            <p className={styles.p}>{item.shipping_company_name}</p>
            <p className={styles.btn}>{item.orders_count} Order</p>
            <p className={styles.btn}>{item.usage_percentage}%</p>
          </div>
        ))}
        <button onClick={() => setSection("Shipping")}>Show All</button>
      </div>
    </div>
  );
}

export default ShippingCompanies;
