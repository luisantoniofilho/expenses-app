import axios from "axios";
import { ExpenseWithoutId } from "../types/expenses";

const BACKEND_URL = "https://expenses-app-3cd5c-default-rtdb.firebaseio.com";

export async function postExpense(expenseData: ExpenseWithoutId) {
  const { data } = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = data.name;
  return id;
}

export async function getExpenses() {
  const { data } = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = Object.keys(data).map((key) => {
    return {
      id: key,
      amount: data[key].amount,
      date: new Date(data[key].date),
      description: data[key].description,
    };
  });

  return expenses;
}

export function updateExpense(id: string, expenseData: ExpenseWithoutId) {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id: string) {
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
