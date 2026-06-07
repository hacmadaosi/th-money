import Button from "@/components/common/Button";
import CustomDialog from "@/components/common/CustomDialog";
import NavigationBar from "@/components/common/NaviagationBar";
import { LAYOUT } from "@/constants/layout";
import { useAuthStore } from "@/store/authStore";
import { useSystemStore } from "@/store/systemStore";
import { StyleSheet, View } from "react-native";

export default function Profile() {
  const { logout } = useAuthStore();
  const { setVisibleDialog } = useSystemStore();

  const handleLogout = () => {
    setVisibleDialog(true);
  };
  const handleSubmit = () => {
    setVisibleDialog(false);
    logout();
  };
  const handleDismiss = () => {
    setVisibleDialog(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Đăng xuất" onPress={handleLogout} />
      <NavigationBar />
      <CustomDialog
        onSubmit={handleSubmit}
        onDismiss={handleDismiss}
        title="Thông báo đăng xuất"
        content="Vui lòng xác nhận đăng xuất tài khoản."
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: LAYOUT.gap,
    padding: LAYOUT.padding,
  },
});
