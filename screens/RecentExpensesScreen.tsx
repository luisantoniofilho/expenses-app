import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { Colors } from "../constants/globalStyles";
import { useContext } from "react";
import { ExpensesContext } from "../context/expensesContext";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpensesScreen() {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="7 days"
        fallback="No expenses registered for the last 7 days."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingHorizontal: 16,
  },
});
