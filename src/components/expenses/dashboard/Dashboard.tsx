import { useEffect, useMemo, useState } from "react";
import MonthlyLine from "./graphs/MonthlyLine";
import {
  DashboardViewData,
  ExpenseByMonth,
  ExpensesByType,
} from "@/model/Expense";
import { MonthNames } from "./Months";
import { CardHeader } from "@/stories/Card/CardHeader";
import AmountByCategoryPie from "./graphs/AmountByCategoryPie";
import { ArcElement, Chart } from "chart.js";

const Dashboard = () => {
  Chart.register(ArcElement);
  const [expenses, setExpenses] = useState<ExpenseByMonth[]>([]);
  const [income, setIncome] = useState<ExpenseByMonth[]>([]);
  const [expensesByType, setExpensesByType] = useState<ExpensesByType[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses/dashboard");
      const data: DashboardViewData = await response.json();
      setExpenses(data.expenses);
      setIncome(data.income);
      setExpensesByType(data.expensesByType);
    };

    fetchExpenses().then();
  }, []);

  return (
    <div className="grid grid-cols-12 grid-rows-12 w-100 gap-3 auto-cols-auto">
      <MonthlyLine
        datasets={{ expenses, income }}
        cardConfig={"col-span-7 row-span-4"}
      />
      <AmountByCategoryPie
        cardConfig={"col-span-5 row-span-5"}
        dataset={expensesByType}
      />
    </div>
  );
};

export default Dashboard;
