import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { getFormattedDate } from "../../utils/date";

export type ExpenseItemProps = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export default function ExpenseItem({ title, date, amount }: ExpenseItemProps) {
  return (
    <View style={styles.rootContainer}>
      <Pressable>
        <View style={styles.outerContainer}>
          {/* Expense info */}
          <View style={styles.TextContainer}>
            <Text style={styles.expenseText}>{title}</Text>
            <Text style={styles.date}>{getFormattedDate(date)}</Text>
          </View>
          {/* Amount */}
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    elevation: 3,
  },
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expenseText: {
    color: "#ffffff",
  },
  TextContainer: { justifyContent: "space-between" },
  date: { color: Colors.primaryLight },
  amountContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "white",
    justifyContent: "center",
  },
  amount: { fontWeight: "bold" },
});
