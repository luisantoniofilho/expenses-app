import { FlatList, View } from "react-native";
import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
}: {
  expenses: ExpenseItemProps[];
  expensesPeriod: "7 days" | "All";
}) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <ExpenseItem
            id={item.id}
            date={item.date}
            amount={item.amount}
            title={item.title}
          />
        )}
        keyExtractor={(expense) => expense.id}
      />
    </View>
  );
}
