import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from "../../constants/globalStyles";

export type InputProps = {
  label: string;
  style?: ViewStyle;
  invalid?: boolean;
  textInputConfig: TextInputProps;
};

export default function Input({
  label,
  style,
  textInputConfig,
  invalid,
}: InputProps) {
  const inputStyles =
    textInputConfig && textInputConfig.multiline
      ? [styles.input, styles.inputMultiline]
      : [styles.input];

  return (
    <View style={[styles.inputContainer, style && style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[inputStyles, invalid && styles.invalidInput]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { marginHorizontal: 4, marginVertical: 8 },
  label: {
    fontSize: 12,
    color: Colors.primaryLight,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.primaryLight,
    color: Colors.primaryDark,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: { color: Colors.secondary },
  invalidInput: {
    backgroundColor: Colors.secondary,
  },
});
