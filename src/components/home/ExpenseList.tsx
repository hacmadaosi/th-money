import { LAYOUT } from "@/constants/layout";
import { _ExpenseList } from "@/types";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseListItem from "./ExpenseListItem";

interface Props {
  expenses: _ExpenseList | null;
}

export default function ExpenseList({ expenses }: Props) {
  return expenses ? (
    <FlatList
      style={styles.container}
      data={expenses!.data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.subcontainer} key={item.id}>
          <Text key={item.id}>
            {item.date} - {item.dayOfWeek}
          </Text>
          {item.expenses.map((e) => (
            <ExpenseListItem expense={e} key={e.id} />
          ))}
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 40,
  },
  subcontainer: {
    flexDirection: "column",
    gap: LAYOUT.gap,
    padding: LAYOUT.padding,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: LAYOUT.margin,
  },
});
