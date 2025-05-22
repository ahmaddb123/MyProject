"use client"
import React, { useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoIosCube } from "react-icons/io";
import "./BoxDashboard.css";
import { useTranslations } from "next-intl";
import Explain from "../../Explain/page";
import { fetchWithAuth } from "../../axios/page";

function BoxDashboard() {
  const t = useTranslations("HomePage");
  const [data, setData] = useState({});

  return (
    <div className="boxs">
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("TotalUser")}</h1>
            <p>{}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#3c3d59" }}>
              <BsFillPeopleFill style={{ color: "#8280FF" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num) Up from yesterd</p>
        <Explain text={"Explain"} />
      </div>
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("TotalOrder")}</h1>
            <p>{}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#574b30" }}>
              <IoIosCube style={{ color: "#FEC53D" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Up from past week</p>
        <Explain text={"Explain"} />
      </div>
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("TotalSales")}</h1>
            <p>${}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#315042" }}>
              <FaChartLine style={{ color: "#4AD991" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Down from yesterday</p>
        <Explain text={"Explain"} />
      </div>
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("TotalPending")}</h1>
            <p>{}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#6a493e" }}>
              <FaClockRotateLeft style={{ color: "#FF9066" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Down from yesterday</p>
        <Explain text={"Explain"} />
      </div>
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("SuccessfulOrders")}</h1>
            <p>{}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#574b30" }}>
              <IoIosCube style={{ color: "#FEC53D" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Up from past week</p>
        <Explain text={"Explain"} />
      </div>
      <div className="BoxDashboard">
        <div className="container-box">
          <div className="name-box">
            <h1>{t("NetSales")}</h1>
            <p>${}</p>
          </div>
          <div className="icon">
            <div style={{ background: "#315042" }}>
              <FaChartLine style={{ color: "#4AD991" }} />
            </div>
          </div>
        </div>
        <p className="desc">(num)Down from yesterday</p>
        <Explain text={"Explain"} />
      </div>
    </div>
  );
}

export default BoxDashboard;
