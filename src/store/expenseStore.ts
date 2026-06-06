import { getExpenses } from "@/api/expense/get_expense";
import { createExpense } from "@/api/expense/insert_expense";
import { _ExpenseList } from "@/types";
import { DBResponse } from "@/types/response";
import { create } from "zustand";

interface ExpenseState {
  expenses: _ExpenseList | null;
  refreshExpense: () => Promise<void>;
  addExpense: (amount: number, description: string) => Promise<DBResponse>;
}

export const useExpenseStore = create<ExpenseState>((set, get) => ({
  expenses: null,

  refreshExpense: async () => {
    const res = await getExpenses(1);
    set({ expenses: res.data });
  },

  addExpense: async (amount: number, description: string) => {
    const res = await createExpense(1, amount, description);

    await get().refreshExpense();

    return res;
  },
}));
