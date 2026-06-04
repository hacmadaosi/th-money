// mocks/groupedExpensesMock.ts
import { _ExpenseList } from "@/types";

export const mockExpenses: _ExpenseList = {
  data: [
    {
      id: 1,
      date: "2024-01-15",
      dayOfWeek: "Thứ 2",
      total: 200000,
      expenses: [
        { id: 1, amount: 50000, description: "Mua cà phê" },
        { id: 2, amount: 150000, description: "Ăn trưa" },
      ],
    },
    {
      id: 2,
      date: "2024-01-14",
      dayOfWeek: "Chủ nhật",
      total: 2000000,
      expenses: [{ id: 3, amount: 2000000, description: "Mua sách" }],
    },
    {
      id: 3,
      date: "2024-01-13",
      dayOfWeek: "Thứ 7",
      total: 530000,
      expenses: [
        { id: 4, amount: 500000, description: "Xăng xe" },
        { id: 5, amount: 30000, description: "Gửi xe" },
      ],
    },
    {
      id: 4,
      date: "2024-01-12",
      dayOfWeek: "Thứ 6",
      total: 370000,
      expenses: [
        { id: 6, amount: 120000, description: "Mua trái cây" },
        { id: 7, amount: 250000, description: "Ăn tối" },
      ],
    },
    {
      id: 5,
      date: "2024-01-11",
      dayOfWeek: "Thứ 5",
      total: 1075000,
      expenses: [
        { id: 8, amount: 1000000, description: "Điện thoại" },
        { id: 9, amount: 75000, description: "Grab" },
      ],
    },
    {
      id: 6,
      date: "2024-01-10",
      dayOfWeek: "Thứ 4",
      total: 345000,
      expenses: [
        { id: 10, amount: 300000, description: "Mua giày" },
        { id: 11, amount: 45000, description: "Bánh mì" },
      ],
    },
    {
      id: 7,
      date: "2024-01-09",
      dayOfWeek: "Thứ 3",
      total: 680000,
      expenses: [
        { id: 12, amount: 80000, description: "Nước uống" },
        { id: 13, amount: 600000, description: "Quần áo" },
      ],
    },
    {
      id: 8,
      date: "2024-01-08",
      dayOfWeek: "Thứ 2",
      total: 370000,
      expenses: [
        { id: 14, amount: 20000, description: "Vé xe buýt" },
        { id: 15, amount: 350000, description: "Ăn vặt" },
      ],
    },
    {
      id: 9,
      date: "2024-01-07",
      dayOfWeek: "Chủ nhật",
      total: 1800000,
      expenses: [
        { id: 16, amount: 1500000, description: "Thuê nhà" },
        { id: 17, amount: 200000, description: "Điện nước" },
        { id: 18, amount: 100000, description: "Mạng internet" },
      ],
    },
    {
      id: 10,
      date: "2024-01-06",
      dayOfWeek: "Thứ 7",
      total: 275000,
      expenses: [
        { id: 19, amount: 180000, description: "Xem phim" },
        { id: 20, amount: 95000, description: "Sữa tươi" },
      ],
    },
  ],
  pagination: {
    page: 1,
    limit: 10,
    totalGroups: 10,
    totalPages: 1,
  },
  summary: {
    totalAll: 7645000,
    averagePerDay: 764500,
  },
};
