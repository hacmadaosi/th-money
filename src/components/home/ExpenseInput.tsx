import { LAYOUT } from "@/constants/layout";
import { useExpenseStore } from "@/store/expenseStore";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Button from "../common/Button";
import Input from "../common/CustomInput";

export default function ExpenseInput() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { addExpense, selectedExpense, setSelectedExpense } = useExpenseStore();

  const handleAddExpense = async () => {
    if (loading) return;

    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0)
      return Alert.alert("Lỗi", "Số tiền phải lớn hơn 0!");
    if (!description.trim()) return Alert.alert("Lỗi", "Vui lòng nhập mô tả!");

    try {
      setLoading(true);

      const res = await addExpense({
        id: -1,
        amount: numericAmount,
        description: description.trim(),
      });

      if (!res.success) {
        Toast.show({
          type: "error",
          text1: "Thông báo",
          text2: res.message,
        });
        return;
      }

      Toast.show({
        type: "success",
        text1: "Thông báo",
        text2: res.message,
      });

      setAmount("");
      setDescription("");
      setSelectedExpense(null);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: "Đã xảy ra lỗi khi thêm chi tiêu!",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClearInput = () => {
    setAmount("");
    setDescription("");
    setSelectedExpense(null);
  };

  useEffect(() => {
    if (selectedExpense) {
      setAmount(selectedExpense.amount.toString());
      setDescription(selectedExpense.description);
    }
  }, [selectedExpense]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeholder="Enter the amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Input
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.bottom_container}>
        {!selectedExpense ? (
          <Button title="Add Expense" onPress={handleAddExpense} />
        ) : (
          <>
            <Button title="Update Expense" onPress={handleAddExpense} />
            <Button
              title="Clear"
              variant="secondary"
              onPress={handleClearInput}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: LAYOUT.maxWidth,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: LAYOUT.borderColor,
    borderRadius: 10,
    padding: LAYOUT.padding,
    gap: LAYOUT.gap,
  },
  bottom_container: {
    flexDirection: "row",
    gap: LAYOUT.gap,
  },

  form: {
    width: "100%",
    flexDirection: "column",
    gap: LAYOUT.gap,
  },
});
