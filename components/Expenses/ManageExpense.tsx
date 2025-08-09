import { Modal, Text, View } from "react-native";

export default function ManageExpense() {
  return (
    <Modal>
      <View>
        <View>
          <Text>Cancel</Text>
          <Text>Update</Text>
        </View>
        <Text>Trash</Text>
      </View>
    </Modal>
  );
}
