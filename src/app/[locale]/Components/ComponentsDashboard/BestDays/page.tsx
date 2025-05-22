"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslations } from "use-intl";
import axiosInstance from "../../axios/page";

// تسجيل المكونات
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels,
  Title
);

const BarChart = () => {
  const t = useTranslations("HomePage");
  const [BestDays, setBestDays] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get("dashboard/best-days/");
        setBestDays(response.data);
        console.log("📊 البيانات المستلمة:", response.data);
      } catch (err: any) {
        setError(err.message || "حدث خطأ");
        console.warn("خطأ جلب البيانات:", err);
      }
    };

    getData();
  }, []);
  console.log(BestDays);

  const Data = {
    labels: BestDays?.best_days?.labels?.map((item: any) => item) || [],
    datasets: [
      {
        label: "المبيعات",
        data: BestDays?.best_days?.values?.map((item: any) => item) || [],
        backgroundColor: "#7987FF",
        borderColor: "#7987FF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      title: {
        display: true,
        text: `${t("BestDays")}`,
        font: {
          size: 18,
        },
        color: "#ffffff",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#ffffff",
        font: {
          weight: "bold",
        },
        formatter: (value: any, context: any) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (error) return <p style={{ color: "red" }}>خطأ: {error}</p>;
  if (!BestDays) return null;

  return (
    <div className="BarChart1">
      {BestDays.best_days && (
        <div className="Bar" style={{ height: "400px" }}>
          <Bar data={Data} options={options} />
        </div>
      )}
    </div>
  );
};

export default BarChart;
