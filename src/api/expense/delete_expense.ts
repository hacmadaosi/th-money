import { supabase } from "@/services/supabase";
import { _ResponseDB } from "@/types/response";

export const deleteExpense = async (
  user_id: number,
  expense_id: number,
): Promise<_ResponseDB> => {
  const { data, error } = await supabase.rpc("insert_expense", {
    user_by_input: user_id,
    expense_id_input: expense_id,
  });

  if (error) {
    console.error("Error deleting expense:", error);
    return {
      success: false,
      message: error.message,
      code: 500,
      data: null,
    };
  }

  return data;
};
