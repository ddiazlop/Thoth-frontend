import { Overview } from "@/components/expenses/overview/Overview";
import { ExpenseForm } from "@/components/expenses/form/ExpenseForm";
import { ExpensesList } from "@/components/expenses/list/latest/ExpensesList";
import { useEffect, useState } from "react";
import { MonthlySwitch } from "@/components/expenses/list/MonthlySwitch";

export const ExpensesContainer = () => {
  const [seed, setSeed] = useState(0);
  const [isMonthlyView, setIsMonthlyView] = useState<boolean>(false);

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

      <MonthlySwitch setIsMonthlyView={setIsMonthlyView} />

      <ExpensesList
        seed={seed}
        setSeed={setSeed}
        isMonthlyView={isMonthlyView}
      />
    </div>
  );
};
