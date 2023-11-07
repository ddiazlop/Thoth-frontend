import { Overview } from "@/components/expenses/overview/Overview";
import { ExpenseForm } from "@/components/expenses/form/ExpenseForm";
import { LatestExpensesList } from "@/components/expenses/list/latest/LatestExpensesList";
import { useEffect, useState } from "react";

export const ExpensesContainer = () => {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    if (seed === 0) {
      return;
    } else {
      setSeed(0);
    }
  }, [seed]);

  return (
    <>
      <Overview />
      <ExpenseForm setSeed={setSeed} />
      <LatestExpensesList seed={seed} setSeed={setSeed} />
    </>
  );
};
