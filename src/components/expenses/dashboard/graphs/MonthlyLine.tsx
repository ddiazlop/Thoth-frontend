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
} from "chart.js";
import { Card, CardHeader, CardBody } from "@/app/lib/Card";

interface data {
  datasets: [{ [key: string]: number }];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyLine: React.FC<data> = ({ datasets }) => {
  const data = {
    labels: Object.keys(datasets[0]),
    datasets: [
      {
        label: "Monthly Expenses",
        data: Object.values(datasets[0]),
        fill: false,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.4)",
          borderColor: "red",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.4)",
          borderColor: "green",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <Card className="w-1/2">
      <CardHeader>
        <h2 className="text-2xl font-semibold">Monthly Expenses</h2>
        <hr className="border-2 border-slate-700 w-1/2 my-4" />
      </CardHeader>
      <CardBody>
        <Line data={data} options={options} />
      </CardBody>
    </Card>
  );
};

export default MonthlyLine;
