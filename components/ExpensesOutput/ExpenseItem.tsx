import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/globalStyles";
import { ExpenseType } from "../../types/expenses";
import { RootStackParamsList } from "../../types/navigation";
import { getFormattedDate } from "../../utils/date";

type NavigationProp = NativeStackNavigationProp<RootStackParamsList>;

export default function ExpenseItem({
  id,
  description,
  date,
  amount,
}: ExpenseType) {
  const navigation = useNavigation<NavigationProp>();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        android_ripple={{ color: "#cccccc" }}
        onPress={expensePressHandler}
      >
        <View style={styles.outerContainer}>
          {/* Expense info */}
          <View style={styles.TextContainer}>
            <Text style={styles.expenseText}>{description}</Text>
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
    borderRadius: 6,
    marginHorizontal: 8,
    backgroundColor: Colors.primary,
    elevation: 3,
    overflow: "hidden",
  },
  pressable: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pressed: { opacity: 0.75 },
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
