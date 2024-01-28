import { ExpenseView } from "@/containers/expenses/Enums";
import { Signal } from "@preact/signals-react";
import { Dispatch, SetStateAction } from "react";

interface MonthlySwitchProps {
  setCurrentView: Dispatch<SetStateAction<ExpenseView>>;
  currentView: ExpenseView;
}

const MonthlySwitch: React.FC<MonthlySwitchProps> = ({
  setCurrentView,
  currentView,
}) => {
  return (
    <div
      className={
        "container mt-5 mb-1 flex flex-row justify-start border-b text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700"
      }>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(ExpenseView.Dashboard)}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === ExpenseView.Dashboard
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Dashboard
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(ExpenseView.Latest)}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === ExpenseView.Latest
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Latest Expenses
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(ExpenseView.Monthly)}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === ExpenseView.Monthly
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Monthly Expenses
        </button>
      </div>
    </div>
  );
};

export default MonthlySwitch;
