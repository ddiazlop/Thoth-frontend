import { ExpensesByType } from "@/model/Expense";
import { Card } from "@/stories/Card/Card";
import { CardBody } from "@/stories/Card/CardBody";
import { CardHeader } from "@/stories/Card/CardHeader";
import { RectangularPlaceHolder } from "@/stories/Placeholders/RectangularPlaceHolder";
import { Pie } from "react-chartjs-2";

interface AmountByCategoryPieProps {
  cardConfig: string;
  dataset: ExpensesByType[];
}

const AmountByCategoryPie = ({
  cardConfig,
  dataset,
}: AmountByCategoryPieProps) => {
  const data = {
    labels: dataset.map((expense) => expense.type),
    datasets: [
      {
        label: "",
        data: dataset.map((expense) => expense.amount),
        backgroundColor: [
          "rgb(255, 117, 51)",
          "rgb(167, 205, 154)",
          "rgb(255, 40, 14)",
          "rgb(5, 115, 59)",
          "rgb(229, 171, 199)",
          "rgb(170, 205, 226)",
          "rgb(10, 85, 122)",
          "rgb(184, 46, 104)",
          "rgb(226, 155, 109)",
          "rgb(241, 224, 94)",
          "rgb(201, 171, 171)",
        ],
        hoverOffset: 4,
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
  };

  return (
    <Card className={cardConfig}>
      <CardHeader title="Expenses By Type" />
      <CardBody>
        <Pie data={data} options={options} />
      </CardBody>
    </Card>
  );
};

export default AmountByCategoryPie;
