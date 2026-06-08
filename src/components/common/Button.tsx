import { LAYOUT } from "@/constants/layout";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  title: string;
  variant?: "primary" | "secondary";
  onPress?: () => void;
}

export default function Button({ title, variant = "primary", onPress }: Props) {
  return (
    <Pressable
      style={({ pressed, hovered }) => [
        styles.base,
        variantStyle[variant],
        pressed && styles.pressed,
        hovered && variantHoverStyle[variant],
      ]}
      onPress={onPress}
      onHoverIn={() => {}}
    >
      <Text style={[styles.baseText, variantTextStyle[variant]]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    userSelect: "none",
  },

  pressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },

  baseText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

const variantStyle = {
  primary: {
    backgroundColor: "#00bfff",
  },
  secondary: {
    backgroundColor: "#f0f0f0",
  },
};

const variantTextStyle = {
  primary: {
    color: "#fff",
  },
  secondary: {
    color: "#333",
  },
};
const variantHoverStyle = {
  primary: {
    borderColor: LAYOUT.white,
  },
  secondary: {
    borderColor: LAYOUT.black,
  },
};
