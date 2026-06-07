import { LAYOUT } from "@/constants/layout";
import { useExpenseStore } from "@/store/expenseStore";
import { _Expense } from "@/types";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

interface Props {
  expense: _Expense;
}

export default function ExpenseListItem({ expense }: Props) {
  const swipeableRef = useRef<any>(null);
  const { setSelectedExpense, setExpenseToDelete } = useExpenseStore();

  const renderRightActions = () => {
    return (
      <TouchableOpacity style={styles.deleteAction}>
        <Text style={styles.actionText}>Remove</Text>
      </TouchableOpacity>
    );
  };

  const renderLeftActions = () => {
    return (
      <TouchableOpacity style={styles.updateAction} onPress={handleUpdate}>
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
    );
  };

  const handleDelete = () => {
    setExpenseToDelete(expense);
  };

  const handleUpdate = () => {
    setSelectedExpense(expense);
  };

  return (
    <ReanimatedSwipeable
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
      rightThreshold={100}
      onSwipeableOpen={(direction) => {
        if (direction === "left") {
          handleDelete();
        } else if (direction === "right") {
          handleUpdate();
        }

        swipeableRef.current?.close();
      }}
    >
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <View>
          <Text style={styles.description}>{expense.description}</Text>

          <Text style={styles.amount}>
            {expense.amount.toLocaleString()} VND
          </Text>
        </View>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  deleteAction: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
    marginVertical: 5,
    borderRadius: 5,
  },
  updateAction: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#B8860B",
    marginVertical: 5,
    borderRadius: 5,
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    width: "100%",
    padding: LAYOUT.padding,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    color: "#666",
  },
});
