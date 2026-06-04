import { supabase } from "@/services/supabase";
import { _ExpenseList } from "@/types";

export interface DBResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data: T | null;
}

export const getExpenses = async (
  userId: number,
): Promise<DBResponse<_ExpenseList>> => {
  const { data, error } = await supabase.rpc("get_expense", {
    user_by_input: userId,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
      code: 500,
      data: null,
    };
  }

  return data as DBResponse<_ExpenseList>;
};
