"use client";

import ChartCircle2 from "../ChartCircle2/page";
import { useTranslations } from "use-intl";
import "./TopProducts.css";
import { IoIosCube } from "react-icons/io";

function TopProducts() {
  const t = useTranslations("HomePage");

  return (
    <div className="TopProducts">
      <h1>{t("TopProducts")}</h1>

      <div className="TopProducts-container">
        <ChartCircle2
          percentages={[35, 50, 15]}
          labels={["content", "content", "content"]}
          descriptions={["desc1", "desc2", "desc3"]}
        />
      </div>

      <div className="RecentOrders">
        <table>
          <thead>
            <tr>
              <th>{t("Image")}</th>
              <th>{t("ProductName")}</th>
              <th>{t("Code")}</th>
              <th>{t("Price")} </th>
              <th>{t("Orders")} </th>
              <th>{t("Percentage")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
        <button className="Show">Show All</button>
      </div>

      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("TotalSoldProducts")}</h1>
            <p>Number</p>
          </div>
          <div className="icon">
            <div style={{ background: "#574b30" }}>
              <IoIosCube style={{ color: "#FEC53D" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Up from past week</p>
      </div>
    </div>
  );
}

export default TopProducts;
