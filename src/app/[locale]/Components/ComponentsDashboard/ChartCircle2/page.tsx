import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js"; // استورد TooltipItem
import "./ChartCircle2.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartCircle2Props {
  percentages: number[];
  labels: string[];
  descriptions: string[];
}

const ChartCircle2 = ({
  percentages,
  labels,
  descriptions,
}: ChartCircle2Props) => {
  const colors = ["#A155B9", "#7987FF", "#F765A3"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: percentages,
        backgroundColor: colors,
        borderWidth: 0,
        cutout: "75%",
        circumference: 360,
        rotation: -90,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {  // هنا النوع
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += context.parsed + "%";
            }
            return label;
          },
          afterLabel: function (context: TooltipItem<"doughnut">) { // هنا النوع
            return descriptions[context.dataIndex];
          },
        },
      },
    },
  };

  return (
    <div className="Doughnut2">
      <div className="Doughnut-container" style={{ flex: 1 }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        {percentages.map((percentage, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: colors[index],
                marginRight: "10px",
              }}
            ></div>
            <span>{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCircle2;
