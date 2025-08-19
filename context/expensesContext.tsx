import { createContext, ReactNode, useState } from "react";
import { ExpenseType } from "../types/expenses";

type ExpensesContextType = {
  expenses: ExpenseType[];
  addExpense: (expense: ExpenseType) => void;
  putExpenses: (expenses: ExpenseType[]) => void;
  updateExpense: (expense: ExpenseType) => void;
  removeExpense: (id: string) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense: ExpenseType) => {},
  putExpenses: (expenses: ExpenseType[]) => {},
  updateExpense: (expense: ExpenseType) => {},
  removeExpense: (id: string) => {},
});

function ExpensesContextProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  function addExpense(expense: ExpenseType) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  function putExpenses(expenses: ExpenseType[]) {
    const invertedExpenses = [...expenses].reverse();
    setExpenses(invertedExpenses);
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
        putExpenses: putExpenses,
        updateExpense: updateExpense,
        removeExpense: removeExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
