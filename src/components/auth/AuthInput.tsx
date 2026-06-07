import { LAYOUT } from "@/constants/layout";
import { useAuthStore } from "@/store/authStore";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../common/CustomInput";

export default function AuthInput() {
  const { email, password, setEmail, setPassword } = useAuthStore();

  const handleChangeEmail = (text: string) => {
    setEmail(text);
  };
  const handleChangePass = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <CustomInput
          value={email}
          onChangeText={handleChangeEmail}
          placeholder="Nhập địa chỉ Email... "
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Mật khẩu</Text>
        <CustomInput
          value={password}
          onChangeText={handleChangePass}
          placeholder="Nhập mật khẩu..."
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: LAYOUT.gap / 2,
  },
  inputContainer: {
    gap: 5,
  },
  inputTitle: {
    fontWeight: "medium",
  },
});
