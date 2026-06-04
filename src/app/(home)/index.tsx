import ExpenseInput from "@/components/home/ExpenseInput";
import ExpenseList from "@/components/home/ExpenseList";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useExpenseStore } from "../store/expenseStore";

// import { mockExpenses } from "@/data/mockExpenses";

export default function Home() {
  // const [expenses, setExpenses] = useState<_ExpenseList | null>(null);
  const { expenses, refreshExpense } = useExpenseStore();

  useEffect(() => {
    refreshExpense();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Management</Text>
      <ExpenseInput />
      <ExpenseList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 48,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
