import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import Colors from "../constants/colors";

export default function RecentExpensesScreen() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Shoes",
      amount: 59.99,
      date: new Date("2022-12-19"),
    },
    {
      id: "e2",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e3",
      title: "Shoes",
      amount: 59.99,
      date: new Date("2022-12-19"),
    },
    {
      id: "e4",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e5",
      title: "Shoes",
      amount: 59.99,
      date: new Date("2022-12-19"),
    },
    {
      id: "e6",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e7",
      title: "Shoes",
      amount: 59.99,
      date: new Date("2022-12-19"),
    },
    {
      id: "e8",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e9",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e10",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e11",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
    {
      id: "e12",
      title: "T-Shirts",
      amount: 99.99,
      date: new Date("2022-01-19"),
    },
  ];

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="7 days" />
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
