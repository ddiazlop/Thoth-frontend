import { Overview } from "@/components/expenses/overview/Overview";
import { ExpenseForm } from "@/components/expenses/form/ExpenseForm";
import { ExpensesList } from "@/components/expenses/list/latest/ExpensesList";
import { useEffect, useState } from "react";

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
    <>
      <Overview seed={seed} />
      <ExpenseForm setSeed={setSeed} />

      <div className={"pt-10 flex justify-end w-11/12"}>
        <label className="relative inline-flex items-center mb-4 cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) => setIsMonthlyView(e.target.checked)}
            value=""
            className="sr-only peer"
          ></input>
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Monthly Expenses
          </span>
        </label>
      </div>

      <ExpensesList
        seed={seed}
        setSeed={setSeed}
        isMonthlyView={isMonthlyView}
      />
    </>
  );
};
