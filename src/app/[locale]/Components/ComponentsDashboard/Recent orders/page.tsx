"use client";
import "./Recentorders.css";
import { useTranslations } from "next-intl";

function RecentOrders() {
  const t = useTranslations("HomePage");

  return (
    <div className="RecentOrders-1">
      <h1>{t("RecentOrders")}</h1>
      <div className="RecentOrders">
        <table>
          <thead>
            <tr>
              <th>{t("OrderId")}</th>
              <th>{t("PaymentWay")}</th>
              <th>{t("CustomerName")}</th>
              <th>{t("Pieces")}</th>
              <th>{t("Price")}</th>
              <th>{t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <button></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="Show">Show All</button>
      </div>
    </div>
  );
}

export default RecentOrders;
