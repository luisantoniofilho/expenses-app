import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/globalStyles";
import { RootStackParamsList } from "../../types/navigation";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { ExpensesContext } from "../../context/expensesContext";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamsList,
  "ManageExpense"
>;

export default function ManageExpense({
  route,
  navigation,
}: ManageExpenseProps) {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add expense",
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteExpenseHandler() {
    if (editExpenseId) expensesCtx.removeExpense(editExpenseId);
    cancelHandler();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense({
        id: editExpenseId,
        title: "Test",
        amount: 20,
        date: new Date("2025-05-19"),
      });
    } else {
      expensesCtx.addExpense({
        title: "Test",
        amount: 20,
        date: new Date("2025-05-19"),
      });
    }
    cancelHandler();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="delete"
            size={36}
            color="red"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primaryDark,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primaryLight,
    alignItems: "center",
  },
});
