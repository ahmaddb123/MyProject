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
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";

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
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
    ],
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
        anchor: "end" as const,
        align: "end" as const,
        color: "#ffffff",
        font: {
          weight: 700,
        },
        formatter: (value: number, context: Context) => {
          return `${context.chart.data.labels?.[context.dataIndex]}: ${value}`;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          color: "#ffffff",
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
