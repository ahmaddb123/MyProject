import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useTranslations } from "next-intl";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./ChartLine.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
);
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
    "نوفمبر", 
    "ديسمبر", 
  ],
  datasets: [
    {
      label: "Sales Details",
      data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56,22,70],
      borderColor: "white",
      backgroundColor: "#4379EE29", // لون التدرج (أزرق مع شفافية)
      fill: true,
      tension: 0.2, // للتحكم في التوتر للخط (لجعل الخط منحني أكثر أو أكثر استقامة)
      borderWidth: 3,
      pointBackgroundColor: "#ccc", // لون النقاط (المربعات)
      pointBorderColor: "#ccc", // لون حدود النقاط
      pointRadius: 6, // حجم النقاط (يمكنك زيادة أو تقليل القيمة هنا)
      pointBorderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.2)", // تغيير لون المربعات في المحور الرأسي
        borderColor: "rgba(255, 99, 132, 0.2)", // تغيير لون الحدود للمربعات
        borderWidth: 1, // تعديل سمك حدود المربعات
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ": " + context.raw;
        },
      },
    },
  },
};

const LineChartComponent = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      style={{
        backgroundColor: "#2E2E30",
        borderRadius: "10px",
        padding: "30px",
      }}
    >
      <div className="container-box-ChartLine">
        <h1>{t("SalesDetails")}</h1>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
