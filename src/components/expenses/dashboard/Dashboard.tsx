import { useEffect, useState } from "react";
import MonthlyLine from "./graphs/MonthlyLine";
import { ExpenseByMonth } from "@/model/Expense";
import { MonthNames } from "./Months";
import { CardHeader } from "@/stories/Card/CardHeader";

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

  return (
    <>
      <MonthlyLine datasets={[expenses]} />
    </>
  );
};

export default Dashboard;
