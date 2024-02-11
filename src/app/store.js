import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../containers/budget/budgetSlice";

export const store = configureStore({
  reducer: {
    budgets: budgetReducer,
  },
});
