export type ExpenseType = {
  id: string;
  amount: number;
  date: Date;
  description: string;
};

export type ExpenseWithoutId = Omit<ExpenseType, "id">;
