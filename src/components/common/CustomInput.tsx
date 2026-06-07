import { LAYOUT } from "@/constants/layout";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  placeholder?: string;
  value: string;
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "visible-password";
  secureTextEntry?: boolean;

  onChangeText: (text: string) => void;
}

export default function CustomInput({
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
}: Props) {
  return (
    <TextInput
      mode="outlined"
      style={styles.input}
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      outlineColor={LAYOUT.borderColor}
      activeOutlineColor={LAYOUT.deepskyblue}
      textColor={LAYOUT.black}
      secureTextEntry={secureTextEntry}
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
