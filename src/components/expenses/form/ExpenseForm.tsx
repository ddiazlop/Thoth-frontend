import { Plus } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

interface ExpensesFormContainerProps {
  setSeed: (value: ((prevState: number) => number) | number) => void;
}

export const ExpenseForm = ({ setSeed }: ExpensesFormContainerProps) => {
  const [errors, setErrors] = useState<{ [field: string]: string }>({});

  const [concept, setConcept] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [income, setIncome] = useState<boolean>(false);
  const [monthly, setMonthly] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/expenses", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const data = await response.json();
      const errorData = data.errors;
      // Shape of errorData: {1: {field: "concept", defaultMessage: "Concept is required"}, 2: {field: "amount", defaultMessage: "Amount is required"}}
      const errorMessages: { [field: string]: string } = {};
      errorData.forEach((error: { field: string; defaultMessage: string }) => {
        errorMessages[error.field] = error.defaultMessage;
      });
      setErrors(errorMessages);
    } else {
      setErrors({});
      setSeed((prevSeed) => prevSeed + 1);
      setConcept("");
      setAmount(0);
      setIncome(false);
      setMonthly(false);
    }
  }

  return (
    <form
      className={"container w-full flex-auto"}
      onSubmit={handleSubmit}
      id={"add-expense-form"}
    >
      <div
        className={
          "flex flex-row mt-5 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-8"
        }
      >
        <div className={"w-full relative"}>
          <label
            htmlFor="concept"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Concept
          </label>
          <input
            type="text"
            name="concept"
            id="concept"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bottle of Water"
            required
          ></input>
          <p className="text-red-500 text-xs italic">{errors["concept"]}</p>
        </div>
        <div className={"w-full relative"}>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            name="amount"
            step="0.01"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1.80"
            required
          ></input>
          <p className="text-red-500 text-xs italic">{errors["amount"]}</p>
        </div>

        <div className={"flex flex-col justify-between p-3"}>
          <div className="flex items-center">
            <input
              id="income"
              name="income"
              type="checkbox"
              checked={income}
              onChange={(e) => setIncome(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              htmlFor="income"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Income
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="monthly"
              name="monthly"
              type="checkbox"
              checked={monthly}
              onChange={(e) => setMonthly(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              htmlFor="monthly"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Monthly
            </label>
          </div>
        </div>

        <div className="inline-block h-30 min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>

        <button
          type={"submit"}
          className={"flex h-20 items-center p-4 cursor-pointer"}
        >
          <Plus size={50} weight="bold" />
        </button>
      </div>
    </form>
  );
};
