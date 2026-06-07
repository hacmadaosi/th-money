import AuthAction from "@/components/auth/AuthActions";
import AuthInput from "@/components/auth/AuthInput";
import { COMPONENT } from "@/constants/component";
import { LAYOUT } from "@/constants/layout";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Text style={COMPONENT.title}>Expense Management</Text>
      <View style={styles.form}>
        <AuthInput />
        <AuthAction />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: LAYOUT.gap,
    backgroundColor: LAYOUT.backgroundColor,
  },
  form: {
    borderWidth: 1,
    borderColor: LAYOUT.borderColor,
    padding: LAYOUT.padding,
    gap: LAYOUT.gap,
    borderRadius: LAYOUT.borderRadius + 10,
    backgroundColor: LAYOUT.white,
  },
});
