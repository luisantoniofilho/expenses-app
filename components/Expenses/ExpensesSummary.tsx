import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/globalStyles";

type ExpensesSummaryProps = {
  expenses: { title: string; amount: number }[];
  periodName: "7 days" | "All";
};

export default function ExpensesSummary({
  expenses,
  periodName,
}: ExpensesSummaryProps) {
  const totalExpensesValue = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.rootContainer}>
      <Text>{periodName}</Text>
      <Text style={styles.price}>${totalExpensesValue.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.primaryLight,
    borderRadius: 24,
  },
  price: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});
