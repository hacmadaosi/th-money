import CustomDialog from "@/components/common/CustomDialog";
import NavigationBar from "@/components/common/NaviagationBar";
import ExpenseInput from "@/components/home/ExpenseInput";
import ExpenseList from "@/components/home/ExpenseList";
import { COMPONENT } from "@/constants/component";
import { LAYOUT } from "@/constants/layout";
import { useExpenseStore } from "@/store/expenseStore";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

// import { mockExpenses } from "@/data/mockExpenses";

export default function Home() {
  const { expenses, refreshExpense, expenseToDelete } = useExpenseStore();

  const handleLoading = async () => {
    const res = await refreshExpense();
    if (!res.success) {
      Toast.show({
        type: "error",
        text1: "Lỗi tải dữ liệu",
        text2: res.message,
      });
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationBar />
      <Text style={COMPONENT.title}>Expense Management</Text>
      <ExpenseInput />
      <ExpenseList expenses={expenses} />
      <CustomDialog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: LAYOUT.backgroundColor,
    flexDirection: "column",
    gap: LAYOUT.gap,
    padding: LAYOUT.padding,
  },
});
