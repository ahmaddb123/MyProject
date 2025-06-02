import React from "react";
import BoxDashboard from "../Components/ComponentsDashboard/BoxDashboard/page";
import Filter from "../Components/Filter/page";
import "./Dashboard.css";
import LineChartComponent from "../Components/ComponentsDashboard/ChartLine/page";
import RecentOrders from "../Components/ComponentsDashboard/Recent orders/page";
import { useTranslations } from "next-intl";
import RecentOrders2 from "../Components/ComponentsDashboard/RecentOrders2/page";
import Section1 from "../Components/ComponentsDashboard/Section1/page";
import Section2 from "../Components/ComponentsDashboard/Section2/page";
import Section3 from "../Components/ComponentsDashboard/Section3/Section3";
import TopProducts from "../Components/ComponentsDashboard/TopProducts/page";

// ✅ تعريف نوع الـ props
interface DashboardProps {
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

function Dashboard({ setSection }: DashboardProps) {
  const t = useTranslations("HomePage");

  return (
    <div className="Dashboard">
      <h1>{t("Dashboard")}</h1>
      <Filter />
      <BoxDashboard />
      <LineChartComponent />
      <RecentOrders />
      <RecentOrders2 />
      <Section1 />
      <Section2 />
      <TopProducts />
      <Section3 setSection={setSection} />
    </div>
  );
}

export default Dashboard;
