"use client";
import Overview from "@/components/expenses/overview/Overview";
import ExpenseForm from "@/components/expenses/form/ExpenseForm";
import ExpensesList from "@/components/expenses/list/latest/ExpensesList";
import { useEffect, useState } from "react";
import MonthlySwitch from "@/components/expenses/list/MonthlySwitch";
import { ExpenseView } from "./Enums";
import Dashboard from "@/components/expenses/dashboard/Dashboard";

const ExpensesContainer = () => {
  const [seed, setSeed] = useState(0);
  const [currentView, setCurrentView] = useState<ExpenseView>(
    ExpenseView.Latest
  );

  useEffect(() => {
    if (seed === 0) {
      return;
    } else {
      setSeed(0);
    }
  }, [seed]);

  return (
    <div className="container w-full flex flex-col">
      <Overview seed={seed} />
      <ExpenseForm setSeed={setSeed} />

      <MonthlySwitch
        setCurrentView={setCurrentView}
        currentView={currentView}
      />

      <div>
        {(ExpenseView.Monthly === currentView ||
          ExpenseView.Latest === currentView) && (
          <ExpensesList
            seed={seed}
            setSeed={setSeed}
            currentView={currentView}
          />
        )}

        {ExpenseView.Dashboard === currentView && <Dashboard />}
      </div>
    </div>
  );
};

export default ExpensesContainer;
