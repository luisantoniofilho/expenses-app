import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/globalStyles";
import { ExpensesContext } from "../../context/expensesContext";
import { RootStackParamsList } from "../../types/navigation";
import ExpenseForm from "../ManageExpense/ExpenseForm";
import IconButton from "../ui/IconButton";
import { ExpenseWithoutId } from "../../types/expenses";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamsList,
  "ManageExpense"
>;

export default function ManageExpense({
  route,
  navigation,
}: ManageExpenseProps) {
  const expensesCtx = useContext(ExpensesContext);

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editExpenseId
  );

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

  function confirmHandler(expenseData: ExpenseWithoutId) {
    if (isEditing) {
      expensesCtx.updateExpense({ id: editExpenseId, ...expenseData });
    } else {
      expensesCtx.addExpense(expenseData);
    }
    cancelHandler();
  }

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />

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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primaryLight,
    alignItems: "center",
  },
});
