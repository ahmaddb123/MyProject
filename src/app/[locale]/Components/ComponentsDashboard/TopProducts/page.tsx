"use client";
import React, { useEffect, useState, useMemo } from "react";
import ChartCircle2 from "../ChartCircle2/page";
import { useTranslations } from "use-intl";
import "./TopProducts.css";
import { IoIosCube } from "react-icons/io";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { fetchWithAuth } from "../../axios/page";

function SortBy({ field, active, asc, onClick }) {
  return (
    <button
      onClick={() => onClick(field)}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {active ? (
        asc ? (
          <IoIosArrowDropup />
        ) : (
          <IoIosArrowDropdown />
        )
      ) : (
        <IoIosArrowDropdown />
      )}
    </button>
  );
}

function TopProducts() {
  const t = useTranslations("HomePage");
  const [TopProducts, setTopProducts] = useState({});
  const [sortField, setSortField] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedProducts = useMemo(() => {
    if (!TopProducts.top_products) return [];
    const products = [...TopProducts.top_products];

    if (!sortField) return products;

    return products.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (sortField === "price" || sortField === "orders") {
        aVal = parseFloat(String(aVal).replace(/[^\d.-]/g, ""));
        bVal = parseFloat(String(bVal).replace(/[^\d.-]/g, ""));
      }

      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [TopProducts, sortField, sortAsc]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="TopProducts">
      <h1>{t("TopProducts")}</h1>

      <div className="TopProducts-container">
        <ChartCircle2
          percentages={[35, 50, 15]}
          labels={["content", "content", "content"]}
        />
      </div>

      <div className="RecentOrders">
        <table>
          <thead>
            <tr>
              <th>{t("Image")}</th>
              <th>{t("ProductName")}</th>
              <th>{t("Code")}</th>
              <th>
                {t("Price")}{" "}
                <SortBy
                  field="price"
                  active={sortField === "price"}
                  asc={sortAsc}
                  onClick={handleSort}
                />
              </th>
              <th>
                {t("Orders")}{" "}
                <SortBy
                  field="orders"
                  active={sortField === "orders"}
                  asc={sortAsc}
                  onClick={handleSort}
                />
              </th>
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
