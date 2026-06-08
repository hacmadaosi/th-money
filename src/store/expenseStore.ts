import { deleteExpense } from "@/api/expense/delete_expense";
import { fetchExpense } from "@/api/expense/fetch_expense";
import { createExpense } from "@/api/expense/insert_expense";
import { _Expense, _ExpenseList } from "@/types";
import { _ResponseDB } from "@/types/response";
import { create } from "zustand";

interface ExpenseState {
  expenses: _ExpenseList | null;

  selectedExpense: _Expense | null;
  expenseToDelete: _Expense | null;

  setSelectedExpense: (_expense: _Expense | null) => void;

  refreshExpense: () => Promise<_ResponseDB>;
  addExpense: (expense: _Expense) => Promise<_ResponseDB>;
  removeExpense: () => Promise<_ResponseDB>;
}
export const useExpenseStore = create<ExpenseState>((set, get) => ({
  expenses: null,

  selectedExpense: null,
  expenseToDelete: null,

  setSelectedExpense: (_expense) => set({ selectedExpense: _expense }),
  refreshExpense: async () => {
    const res = await fetchExpense();

    set({
      expenses: res.data,
    });

    return res;
  },

  addExpense: async (expense) => {
    const res = await createExpense(expense.amount, expense.description);

    if (res.success) await get().refreshExpense();

    return res;
  },

  removeExpense: async () => {
    const { selectedExpense } = get();
    const res = await deleteExpense(selectedExpense!.id);

    await get().refreshExpense();
    return res;
  },
}));
