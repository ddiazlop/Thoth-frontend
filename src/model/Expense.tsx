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
