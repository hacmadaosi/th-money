import { StyleSheet, TextInput } from "react-native";

interface Props {
  placeholder?: string;
  value: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  onChangeText: (text: string) => void;
}

export default function Input({
  placeholder,
  value,
  keyboardType,
  onChangeText,
}: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
