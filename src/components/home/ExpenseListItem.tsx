import { _ExpenseItem } from "@/types";
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

interface Props {
  expense: _ExpenseItem;
}

export default function ExpenseListItem({ expense }: Props) {
  const swipeableRef = useRef<any>(null);

  const renderRightActions = () => {
    return (
      <TouchableOpacity
        style={styles.deleteAction}
        onPress={() => {
          console.log("Delete: ", expense.id);
        }}
      >
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
    console.log("Delete: ", expense.id);
  };

  const handleUpdate = () => {
    console.log("Update: ", expense.id);
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.05)",
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
