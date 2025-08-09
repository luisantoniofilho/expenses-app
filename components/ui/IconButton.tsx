import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof AntDesign>["name"];
  size: number;
  color: string;
  onPress: () => void;
};

export default function IconButton({
  icon,
  size,
  color,
  onPress,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <AntDesign
          name={icon}
          size={size}
          color={color}
          style={{ marginRight: 12 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
