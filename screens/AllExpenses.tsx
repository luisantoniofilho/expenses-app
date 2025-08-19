import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { Colors } from "../constants/globalStyles";
import { useContext } from "react";
import { ExpensesContext } from "../context/expensesContext";

export default function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expenses={expenses}
        expensesPeriod="All"
        fallback="No registered expenses found!"
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
