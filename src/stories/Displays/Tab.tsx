import { SetStateAction } from "react";

interface TabProps {
  setCurrentView: (value: number) => void;
  currentView?: number;
  views: number[];
}
//TODO: SEparate this
export const Tab = ({ setCurrentView, currentView, views }: TabProps) => {
  return (
    <div
      className={
        "container mt-5 mb-1 flex flex-row justify-start border-b text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700"
      }>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(views[0])}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === views[0]
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Dashboard
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(views[1])}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === views[1]
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Latest Expenses
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setCurrentView(views[2])}
          className={
            "me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" +
            (currentView === views[2]
              ? " border-b-2 border-gray-600 dark:border-gray-300 dark:text-gray-200 text-gray-600"
              : "")
          }>
          Monthly Expenses
        </button>
      </div>
    </div>
  );
};
