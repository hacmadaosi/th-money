import { supabase } from "@/services/supabase";
import { _ResponseDB } from "@/types/response";

export const createExpense = async (
  amount: number,
  description: string,
): Promise<_ResponseDB> => {
  try {
    const { data, error } = await supabase.rpc("insert_expense", {
      amount_input: amount,
      description_input: description,
    });

    if (error) {
      console.error("[fetchExpense]", error);

      return {
        success: false,
        message: error.message,
        code: 500,
        data: [],
      };
    }
    return {
      success: true,
      message: "Thêm khoản chi tiêu thành công",
      code: 200,
      data: data.data[0],
    };
  } catch (error) {
    console.error("[fetchExpense]", error);

    return {
      success: false,
      message: "Lỗi hệ thống vui lòng thử lại sau.",
      code: 500,
      data: [],
    };
  }
};
