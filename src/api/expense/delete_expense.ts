import { supabase } from "@/services/supabase";
import { _ResponseDB } from "@/types/response";

export const deleteExpense = async (
  expense_id: number,
): Promise<_ResponseDB> => {
  const { data, error } = await supabase.rpc("delete_expense", {
    id_input: expense_id,
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
