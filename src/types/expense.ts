export interface _ExpenseItem {
  id: number;
  amount: number;
  description: string;
}

export interface _DailyExpense {
  id: number;
  date: string;
  dayOfWeek: string;
  total: number;
  expenses: _ExpenseItem[];
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

