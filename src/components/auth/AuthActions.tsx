import { useAuthStore } from "@/store/authStore";
import { View } from "react-native";
import Button from "../common/Button";

export default function AuthAction() {
  const { login } = useAuthStore();
  const handleLogin = () => {
    const result = login();
    console.log(result)
  };
  return (
    <View>
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}
