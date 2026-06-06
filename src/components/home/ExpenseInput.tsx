import { LAYOUT } from "@/constants/layout";
import { useExpenseStore } from "@/store/expenseStore";
import { useState } from "react";
import { Alert, Platform, StyleSheet, View } from "react-native";
import Button from "../common/Button";
import Input from "../common/Input";

export default function ExpenseInput() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const { addExpense } = useExpenseStore();

  const handleAddExpense = async () => {
    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0)
      return Alert.alert("Lỗi", "Số tiền phải lớn hơn 0!");
    if (!description.trim()) return Alert.alert("Lỗi", "Vui lòng nhập mô tả!");

    const result = await addExpense(numericAmount, description);

    if (!result.success) {
      Alert.alert("Thất bại", result.message);
    } else {
      Alert.alert("Thành công", result.message);
      setAmount("");
      setDescription("");
    }
  };

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
      <Button title="Add Expense" onPress={handleAddExpense} />
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
    borderColor: "#ccc",
    borderRadius: 10,
    padding: LAYOUT.padding,
    gap: 20,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
  form: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
  },

  button: {
    marginLeft: 10,
    backgroundColor: "#00bfff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    ...(Platform.OS === "web" && ({ outlineStyle: "none" } as any)),
  },
  buttonText: {
    color: "#fff",
  },
});
