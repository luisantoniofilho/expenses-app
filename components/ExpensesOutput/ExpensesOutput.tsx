import { StyleSheet, Text, View } from "react-native";
import { ExpenseType } from "../../types/expenses";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallback,
}: {
  expenses: ExpenseType[];
  expensesPeriod: "7 days" | "All";
  fallback: string;
}) {
  let content = <Text style={styles.infoText}>{fallback}</Text>;

  if (expenses.length > 0) content = <ExpensesList expenses={expenses} />;

  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
