export type Expense = {
  id: number;
  concept: string;
  amount: number;
  date: string;
  monthly: boolean;
  type: string;
};

export type ExpenseByMonth = {
  month: string;
  amount: number;
};

export type ExpensesByType = {
  type: string;
  amount: number;
};

export type DashboardViewData = {
  expenses: ExpenseByMonth[];
  income: ExpenseByMonth[];
  expensesByType: ExpensesByType[];
};
