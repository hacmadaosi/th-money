// src/api/expense.ts
import { supabase } from "@/services/supabase";
import { DBResponse } from "@/types/response";

export const createExpense = async (
  id_user: number,
  amount: number,
  description: string,
): Promise<DBResponse> => {
  // Gọi RPC sang Supabase
  const { data, error } = await supabase.rpc("insert_expense", {
    amount_input: amount,
    description_input: description,
    user_by_input: id_user,
  });

  if (error) {
    console.error("Error inserting expense:", error);
    return {
      success: false,
      message: error.message,
      code: 500,
      data: null,
    };
  }

  return data;
};
