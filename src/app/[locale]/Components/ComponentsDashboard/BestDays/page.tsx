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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Context as ChartJSDataLabelsContext } from "chartjs-plugin-datalabels";
import { useTranslations } from "use-intl";

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

  const labels = [1, 2, 3, 4, 5, 6, 7];
  const values = [10, 20, 30, 40, 50, 60, 70];

  const Data = {
    labels,
    datasets: [
      {
        label: "المبيعات",
        data: values,
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
        color: "#ffffff",
        font: {
          weight: "bold" as const,
        },
        formatter: (value: number, context: ChartJSDataLabelsContext) => {
          return `${context.chart.data.labels?.[context.dataIndex]}: ${value}`;
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
    <div className="BarChart1">
      <div className="Bar" style={{ height: "400px" }}>
        <Bar data={Data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
