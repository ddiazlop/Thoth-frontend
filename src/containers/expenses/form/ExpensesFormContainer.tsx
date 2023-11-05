export const ExpensesFormContainer = () => {
    return (
    <form>
        <div className={"flex flex-row mt-5 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-8"}>
            <div>
                <label htmlFor="concept" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Concept</label>
                <input type="text" id="concept" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bottle of Water" required></input>
            </div>
            <div>
                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input type="number" step="0.01" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1.80" required></input>
            </div>

            <div className={"flex flex-col justify-between p-2"}>
                <div className="flex items-center">
                    <input id="income" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="income" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Income</label>
                </div>
                <div className="flex items-center">
                    <input id="monthly" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="monthly" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</label>
                </div>

            //TODO: Add form submission
            </div>
        </div>
    </form>
    );
};