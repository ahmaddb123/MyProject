"use client";
import React from "react";
import "./BarChartProducts.css";
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

const BarChartProducts = () => {


  const data = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يناير", "فبراير", "مارس", "أبريل", "مايو"],
    datasets: [
      {
        label: "المبيعات",
        data: [65, 59, 90, 81, 56, 65, 59, 80, 81, 56],
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
        text: `Product`,
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
        formatter: (value, context) => {
          return `${context.chart.data.labels[context.dataIndex]}: ${value}`;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // الزيادة كل 20
          color: "#ffffff", // لون الأرقام
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="BarChartProducts">
      <div className="BarProducts">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartProducts;
