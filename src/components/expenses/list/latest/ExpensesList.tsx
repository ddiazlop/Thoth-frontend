import { Expense } from "@/model/Expense";
import { animated, useTrail } from "@react-spring/web";
import { useEffect, useState } from "react";

interface LatestExpensesListContainerProps {
  setSeed: (value: ((prevState: number) => number) | number) => void;
  seed: number;
  isMonthlyView: boolean;
}

const ExpensesList = ({
  seed,
  setSeed,
  isMonthlyView,
}: LatestExpensesListContainerProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const expensesTrail = useTrail(expenses.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    const url = isMonthlyView
      ? "/api/expenses/monthly"
      : "/api/expenses/latest";

    const fetchExpenses = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses().then();
  }, [seed, isMonthlyView]);

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
    <div
      className={
        "container overflow-x-auto shadow-md w-full rounded-lg mt-0.5"
      }>
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
        <tbody>
          {expensesTrail.map(({ ...style }, index) => {
            const expense = expenses[index];

            return (
              <animated.tr
                key={expense.id}
                className={
                  "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                }
                style={style}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {expense.concept}
                </td>
                <td
                  className={`px-6 py-4 text-center ${
                    expense.amount >= 0 ? "text-green-600" : "text-red-600"
                  }`}>
                  {expense.amount}€
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer"
                    onClick={() => handleDelete(expense.id)}>
                    Delete
                  </a>
                </td>
              </animated.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
