import { useEffect, useState } from "react";
import MonthlyLine from "./graphs/MonthlyLine";
import { ExpenseByMonth } from "@/model/Expense";
import { MonthNames } from "./Months";
import { Card, CardBody } from "@nextui-org/react";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<ExpenseByMonth[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses/per-month");
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses().then();
  }, []);

  const expensesDataset: { [key: string]: number } = {};
  expenses.forEach((expense) => {
    const [year, month] = expense.month.split("-");
    const parsedMonth = `${year}-${MonthNames[parseInt(month)]}`;
    expensesDataset[parsedMonth] = expense.amount;
  });

  return (
    <>
      <MonthlyLine datasets={[expensesDataset]} />
    </>
  );
};

export default Dashboard;
