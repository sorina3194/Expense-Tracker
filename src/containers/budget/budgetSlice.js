import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
} from "../transaction/transactionsSlice";

export const CATEGORIES = [
  "Housing",
  "Food",
  "Transportation",
  "Utilities",
  "Clothing",
  "Healthcare",
  "Personal",
  "Education",
  "Entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const budgetIndex = state.findIndex(
        (budget) => budget.category === action.payload.category
      );
      if (budgetIndex !== -1) {
        state[budgetIndex] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTransaction.type, (state, action) => {
      const target = state.find(
        (budget) => budget.category === action.payload.category
      );
      target.amount -= action.payload.amount;
    });
    builder.addCase(deleteTransaction.type, (state, action) => {
      const target = state.find(
        (budget) => budget.category === action.payload.category
      );
      target.amount += action.payload.amount;
    });
  },
});

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
