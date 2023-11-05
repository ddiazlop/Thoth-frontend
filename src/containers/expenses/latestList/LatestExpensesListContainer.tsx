import {Expense} from "@/model/Expense";
import {useEffect, useState} from "react";

export const LatestExpensesListContainer = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses/latest')
            const data = await response.json()
            setExpenses(data)
        };

        fetchExpenses().then();
    });

    return (
        <div className={"relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5"}>
            <table className={"w-full text-sm text-left text-gray-500 dark:text-gray-400"}>
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
                {expenses.map((expense) => (
                    <tr key={expense.id} className={"bg-white border-b dark:bg-gray-900 dark:border-gray-700"}>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {expense.concept}
                        </td>
                        <td className={`px-6 py-4 text-center ${expense.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {expense.amount}€
                        </td>
                        <td className="px-6 py-4 text-center">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Delete
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};