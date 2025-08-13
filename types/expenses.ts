export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpenseWithoutId = Omit<ExpenseType, "id">;
