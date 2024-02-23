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
import { Card } from "@/stories/Card/Card";
import { CardHeader } from "@/stories/Card/CardHeader";

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
    <Card width={50}>
      <CardHeader title="Monthly Expenses" />
      {/* <CardBody>
        <Line data={data} options={options} />
      </CardBody> */}
    </Card>
  );
};

export default MonthlyLine;
