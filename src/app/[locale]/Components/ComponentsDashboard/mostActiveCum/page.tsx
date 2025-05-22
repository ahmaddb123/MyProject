"use client";

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
import { useTranslations } from "use-intl";

import "./mostActiveCum.css";

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
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
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
        color: "#ffffff",
        font: {
          weight: 700,
        },
        formatter: (value: number, context: Context) => {
          return `${context.chart.data.labels![context.dataIndex]}: ${value}`;
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
