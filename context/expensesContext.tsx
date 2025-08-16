import { createContext, ReactNode, useState } from "react";
import { ExpenseType, ExpenseWithoutId } from "../types/expenses";

type ExpensesContextType = {
  expenses: ExpenseType[];
  addExpense: (expense: ExpenseWithoutId) => void;
  updateExpense: (expense: ExpenseType) => void;
  removeExpense: (id: string) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense: ExpenseWithoutId) => {},
  updateExpense: (expense: ExpenseType) => {},
  removeExpense: (id: string) => {},
});

function ExpensesContextProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  function addExpense(expense: ExpenseWithoutId) {
    const id = new Date().toString() + Math.random().toString();
    setExpenses((expenses) => [...expenses, { id, ...expense }]);
  }

  function updateExpense(newExpense: ExpenseType) {
    setExpenses((expenses) =>
      expenses.map((expense) =>
        expense.id === newExpense.id ? newExpense : expense
      )
    );
  }

  function removeExpense(id: string) {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        removeExpense: removeExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
