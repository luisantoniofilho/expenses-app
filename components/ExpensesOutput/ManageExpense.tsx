import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/globalStyles";
import { ExpensesContext } from "../../context/expensesContext";
import { ExpenseWithoutId } from "../../types/expenses";
import { RootStackParamsList } from "../../types/navigation";
import { deleteExpense, postExpense, updateExpense } from "../../utils/http";
import ExpenseForm from "../ManageExpense/ExpenseForm";
import IconButton from "../ui/IconButton";
import LoadingOverlay from "../ui/LoadingOverlay";
import ErrorOverlay from "../ui/ErrorOverlay";

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamsList,
  "ManageExpense"
>;

export default function ManageExpense({
  route,
  navigation,
}: ManageExpenseProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<null | string>();

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

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      if (editExpenseId) {
        await deleteExpense(editExpenseId);
        // setIsSubmitting(false);
        expensesCtx.removeExpense(editExpenseId);
        cancelHandler();
      }
    } catch (error) {
      setError("Could not delete expense - please try again later");
      console.error(error);
      setIsSubmitting(false);
    }
  }

  async function confirmHandler(expenseData: ExpenseWithoutId) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense({ id: editExpenseId, ...expenseData });
        await updateExpense(editExpenseId, expenseData);
      } else {
        const id = await postExpense(expenseData);
        expensesCtx.addExpense({ id, ...expenseData });
      }
      cancelHandler();
    } catch (error) {
      console.error(error);
      setError("Could not save data - please try again later!");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
