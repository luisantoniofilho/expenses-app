import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/globalStyles";
import { RootStackParamsList } from "../../types/navigation";
import IconButton from "../ui/IconButton";

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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  return (
    <View style={styles.rootContainer}>
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
