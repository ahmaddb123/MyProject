import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./returnedCustomer.css";

ChartJS.register(ArcElement, Tooltip, Legend);
type ChartCircleProps = {
  percentage: number;  // هنا نوع الـ prop رقم
}; 
const ChartCircle: React.FC<ChartCircleProps> = ({ percentage }) =>{ // استقبال prop باسم percentage
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // استخدام prop لتحديث البيانات
        backgroundColor: ["#F765A3", "#424242"],
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
        enabled: false,
      },
    },
  };

  return (
    <div className="Doughnut">
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2em", fontWeight: "bold" }}>{percentage}%</div> {/* استخدام prop لتحديث النص */}
      </div>
    </div>
  );
};

export default ChartCircle;