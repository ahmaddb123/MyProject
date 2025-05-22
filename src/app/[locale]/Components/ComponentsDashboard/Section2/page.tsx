import React from "react";
import "./Section2.css";
import BarChart2 from "../mostActiveCum/page";
import ReturnedCustomer from "../returnedCustomer/page";
import { BsFillPeopleFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

function Section2() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div className="box-section1">
        <BarChart2 />
        <ReturnedCustomer />
      </div>
      <div className="box-section2">
        <div className="BoxDashboard">
          <div className="container-box">
            <div className="name-box">
              <h1>{t("firstTime")}</h1>
              <p>Number</p>
            </div>
            <div className="icon">
              <div style={{ background: "#3c3d59" }}>
                <BsFillPeopleFill style={{ color: "#8280FF" }} />
              </div>
            </div>
          </div>
          <p className="desc">(num) Up from yesterd</p>
        </div>{" "}
        <div className="BoxDashboard">
          <div className="container-box">
            <div className="name-box">
              <h1>{t("MultipleTime")}</h1>
              <p>Number</p>
            </div>
            <div className="icon">
              <div style={{ background: "#3c3d59" }}>
                <BsFillPeopleFill style={{ color: "#8280FF" }} />
              </div>
            </div>
          </div>
          <p className="desc">(num) Up from yesterd</p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
