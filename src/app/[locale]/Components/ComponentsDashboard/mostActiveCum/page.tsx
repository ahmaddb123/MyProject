"use client"
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
import { FaImage } from "react-icons/fa";
import "./mostActiveCum.css";
import { fetchWithAuth } from "../../axios/page";

// تسجيل المكونات الضرورية
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels,
  Title
);

const BarChart2 = () => {
  const t = useTranslations("HomePage");
  const [BarChart, setBarChart] = useState({});

  const data = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو"],
    datasets: [
      {
        label: "المبيعات",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#7987FF",
        borderColor: "#7987FF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // تعطيل النسبة التلقائية للسماح بتعديل الحجم
    plugins: {
      legend: { display: false }, // إخفاء عنوان البيانات الجانبي
      tooltip: { enabled: true },
      title: {
        display: true,
        text: `${t("mostActiveCum")}`,
        font: {
          size: 18,
        },
        color: "#ffffff",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#ffffff", // تغيير لون الأرقام إلى الأحمر
        font: {
          weight: "bold",
        },
        formatter: (value, context) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`; // عرض اسم القسم مع الرقم
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="BarChart2">
      <div className="Bar">
        <Bar data={data} options={options} />
      </div>
      <div>
        <button>Show All</button>
      </div>
    </div>
  );
};

export default BarChart2;
