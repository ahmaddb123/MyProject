"use client";
import React, { useEffect, useState, useMemo } from "react";
import "./Recentorders.css";
import { useTranslations } from "next-intl";
import SortBy from "../../SortBy/page";
import { fetchWithAuth } from "../../axios/page";

function RecentOrders() {
  const t = useTranslations("HomePage");
  const [recentOrders, setRecentOrders] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedOrders = useMemo(() => {
    if (!sortField) return recentOrders;

    return [...recentOrders].sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      // نحولهم لأرقام إذا كانوا price أو pieces
      if (sortField === "price" || sortField === "pieces") {
        aVal = parseFloat(String(aVal).replace(/[^\d.]/g, ""));
        bVal = parseFloat(String(bVal).replace(/[^\d.]/g, ""));
      } else {
        // نرتب كـ strings
        aVal = aVal?.toString().toLowerCase();
        bVal = bVal?.toString().toLowerCase();
      }

      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [recentOrders, sortField, sortAsc]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc((prev) => !prev); // عكس الترتيب
    } else {
      setSortField(field);
      setSortAsc(true); // ترتيب تصاعدي بالبداية
    }
  };

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
              <th>
                {t("Pieces")}
                <SortBy
                  sortAsc={sortField === "pieces" ? sortAsc : true}
                  onToggle={() => handleSort("pieces")}
                />
              </th>
              <th>
                {t("Price")}
                <SortBy
                  sortAsc={sortField === "price" ? sortAsc : true}
                  onToggle={() => handleSort("price")}
                />
              </th>
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
