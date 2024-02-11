import { createSlice } from "@reduxjs/toolkit";

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
      state.budgets[action.payload.category] = action.payload;
    },
  },
});

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
