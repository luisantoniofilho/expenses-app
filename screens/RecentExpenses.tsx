import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Colors } from "../constants/globalStyles";
import { ExpensesContext } from "../context/expensesContext";
import { getDateMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      setIsFetching(true);
      try {
        const expenses = await getExpenses();
        expensesCtx.putExpenses(expenses);
      } catch (error) {
        console.error(error);
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }

    fetchExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
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
