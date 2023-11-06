import {Expense} from "@/model/Expense";
import {useEffect, useState} from "react";


interface LatestExpensesListContainerProps {
    setSeed: (value: (((prevState: number) => number) | number)) => void
    seed: number
}

export const LatestExpensesList = ({seed, setSeed}: LatestExpensesListContainerProps) => {

    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses/latest')
            const data = await response.json()
            setExpenses(data)
        };

        fetchExpenses().then();
    }, [seed]);

    const handleDelete = async (id: number) => {
        const response = await fetch('/api/expenses/' + id, {
            method: 'DELETE',
        });


        if (!response.ok) {
            const data = await response.json();
            console.log(data);
        }else{
            setSeed((prevSeed) => prevSeed + 1);
        }
    }


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
                                <a className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer" onClick={() => handleDelete(expense.id)}>
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