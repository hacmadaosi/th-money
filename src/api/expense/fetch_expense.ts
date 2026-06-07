import { supabase } from "@/services/supabase";
import { _Expense, _ExpenseList } from "@/types";
import { _ResponseDB } from "@/types/response";
import dayjs from "dayjs";

export const fetchExpense = async (): Promise<_ResponseDB> => {
  try {
    const { data, error } = await supabase.rpc("fetch_expenses");

    if (error) {
      console.error("[fetchExpense]", error);

      return {
        success: false,
        message: error.message,
        code: 500,
        data: [],
      };
    }

    if (!data?.success) {
      return {
        success: false,
        message: "Không thể lấy dữ liệu chi tiêu.",
        code: 400,
        data: [],
      };
    }

    const groupedExpenses = groupExpenses(data.data as _Expense[]);

    return {
      success: true,
      message: "Lấy danh sách chi tiêu thành công.",
      code: 200,
      data: groupedExpenses,
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

export const groupExpenses = (expenses: _Expense[]): _ExpenseList => {
  const groups = new Map<string, _Expense[]>();

  // Group theo ngày
  expenses.forEach((expense) => {
    const date = dayjs(expense.created_at).format("YYYY-MM-DD");

    if (!groups.has(date)) {
      groups.set(date, []);
    }

    groups.get(date)!.push(expense);
  });

  const data = Array.from(groups.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, items], index) => ({
      id: index + 1,
      date,
      dayOfWeek: dayjs(date).locale("vi").format("dddd"),

      total: items.reduce((sum, item) => sum + item.amount, 0),

      expenses: items.map((item: _Expense) => ({
        id: item.id,
        amount: item.amount,
        description: item.description,
      })),
    }));

  const totalAll = data.reduce((sum, group) => sum + group.total, 0);

  return {
    data,
    pagination: {
      page: 1,
      limit: data.length,
      totalGroups: data.length,
      totalPages: 1,
    },
    summary: {
      totalAll,
      averagePerDay: data.length > 0 ? Math.round(totalAll / data.length) : 0,
    },
  };
};
