export interface _Expense {
  id: number;
  amount: number;
  description: string;
  created_at?: string;
}

export interface _DailyExpense {
  id: number;
  date: string;
  dayOfWeek: string;
  total: number;
  expenses: _Expense[];
}

export interface _ExpenseList {
  data: _DailyExpense[];
  pagination: {
    page: number;
    limit: number;
    totalGroups: number;
    totalPages: number;
  };
  summary: {
    totalAll: number;
    averagePerDay: number;
  };
}
