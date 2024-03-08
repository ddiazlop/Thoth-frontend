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
import { CardBody } from "@/stories/Card/CardBody";
import { ExpenseByMonth } from "@/model/Expense";

interface data {
  datasets: { expenses: ExpenseByMonth[]; income: ExpenseByMonth[] };
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

const MonthlyLine: React.FC<data> = ({ datasets: { expenses, income } }) => {
  const data = {
    labels: expenses.map((expense) => expense.month),
    datasets: [
      {
        label: "Monthly Expenses",
        data: expenses.map((expense) => expense.amount),
        fill: false,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
      },
      {
        label: "Monthly Income",
        data: income.map((income) => income.amount),
        fill: false,
        backgroundColor: "#00ff00",
        borderColor: "#00ff00",
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
      <CardHeader title="Expenses VS Income" />
      <CardBody>
        <Line data={data} options={options} />
      </CardBody>
    </Card>
  );
};

export default MonthlyLine;
