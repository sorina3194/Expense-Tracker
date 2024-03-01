import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
} from "../transaction/transactionsSlice";
import { selectUserId } from "../usersSlice";
import { addBudget } from "../../firebase";
import { userBudget } from "../../firebase";

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

export const editBudget = createAsyncThunk(
  "budgets/editBudget",
  async (budget, thunkApi) => {
    console.log(budget);
    const userId = selectUserId(thunkApi.getState());

    await addBudget(userId, budget);
    return budget;
  }
);

export const getBudget = createAsyncThunk(
  "budgets/getBudget",
  async (_, thunkApi) => {
    const userId = selectUserId(thunkApi.getState());
    const budgets = [];
    for (const category of CATEGORIES) {
      const response = await userBudget(userId, category);
      if (response) {
        budgets.push(response);
      }
    }
    return budgets;
  }
);

const budgetSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {},
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
    builder.addCase(editBudget.fulfilled, (state, action) => {
      const budgetIndex = state.findIndex(
        (budget) => budget.category === action.payload.category
      );
      if (budgetIndex !== -1) {
        state[budgetIndex] = action.payload;
      }
    });
    builder.addCase(getBudget.fulfilled, (state, action) => {
      for (const newBudget of action.payload) {
        const budgetIndex = state.findIndex(
          (budget) => budget.category === newBudget.category
        );
        if (budgetIndex !== -1) {
          state[budgetIndex] = newBudget;
        }
      }
    });
  },
});

export const selectBudgets = (state) => state.budgets;
export default budgetSlice.reducer;
