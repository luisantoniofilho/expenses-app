import { FlatList } from "react-native";
import { ExpenseType } from "../../types/expenses";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({
  expenses,
}: {
  expenses: ExpenseType[];
}) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => (
        <ExpenseItem
          id={item.id}
          date={item.date}
          amount={item.amount}
          description={item.description}
        />
      )}
      keyExtractor={(expense) => expense.id}
    />
  );
}
