import { useEffect, useMemo, useState } from "react";
import MonthlyLine from "./graphs/MonthlyLine";
import { ExpenseAndIncomeByMonth, ExpenseByMonth } from "@/model/Expense";
import { MonthNames } from "./Months";
import { CardHeader } from "@/stories/Card/CardHeader";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<ExpenseByMonth[]>([]);
  const [income, setIncome] = useState<ExpenseByMonth[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses/per-month");
      const data: ExpenseAndIncomeByMonth = await response.json();
      setExpenses(data.expenses);
      setIncome(data.income);
    };

    fetchExpenses().then();
  }, []);

  return (
    <>
      <MonthlyLine datasets={{ expenses, income }} />
    </>
  );
};

export default Dashboard;
