"use client";
import Overview from "@/components/expenses/overview/Overview";
import ExpenseForm from "@/components/expenses/form/ExpenseForm";
import ExpensesList from "@/components/expenses/list/latest/ExpensesList";
import { useEffect, useState } from "react";
import MonthlySwitch from "@/components/expenses/list/MonthlySwitch";
import { ExpenseView } from "./Enums";

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
    <div className="w-full flex flex-col">
      <Overview seed={seed} />
      <ExpenseForm setSeed={setSeed} />

      <MonthlySwitch
        setCurrentView={setCurrentView}
        currentView={currentView}
      />

      {ExpenseView.Monthly === currentView ||
        (ExpenseView.Latest === currentView && (
          <ExpensesList
            seed={seed}
            setSeed={setSeed}
            currentView={currentView}
          />
        ))}
    </div>
  );
};

export default ExpensesContainer;
