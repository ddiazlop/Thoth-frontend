import { ExpenseView } from "@/containers/expenses/Enums";
import { Expense } from "@/model/Expense";
import { animated, useTrail } from "@react-spring/web";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LatestExpensesListContainerProps {
  setSeed: (value: ((prevState: number) => number) | number) => void;
  seed: number;
  currentView: ExpenseView;
}

const ExpensesList = ({
  seed,
  setSeed,
  currentView,
}: LatestExpensesListContainerProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const url =
      currentView === ExpenseView.Monthly
        ? "/api/expenses/monthly"
        : "/api/expenses/latest";

    const fetchExpenses = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses().then();
  }, [seed, currentView]);

  const handleDelete = async (id: number) => {
    const response = await fetch("/api/expenses/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      setSeed((prevSeed) => prevSeed + 1);
    }
  };

  return (
    <motion.div
      className={"overflow-x-auto shadow-md w-full rounded-lg mt-0.5"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}>
      <table
        className={"w-full text-sm text-left text-gray-500 dark:text-gray-400"}>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-8 pr-40 py-3">
              Concept
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <motion.tbody initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {expenses.map((expense, index) => (
            <motion.tr
              key={expense.id}
              className={
                "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              }
              style={{ originY: 0 }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.1 * index }}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {expense.concept}
              </td>
              <td
                className={`px-6 py-4 text-center ${
                  expense.amount >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                {expense.amount.toFixed(2)}€
              </td>
              <td className="px-6 py-4 text-center">
                <a
                  className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer"
                  onClick={() => handleDelete(expense.id)}>
                  Delete
                </a>
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
};

export default ExpensesList;
