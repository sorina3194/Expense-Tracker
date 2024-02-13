import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../containers/budget/budgetSlice";
import transactionsReducer from '../containers/transaction/transactionsSlice'


export const store = configureStore({
  reducer: {
    budgets: budgetReducer,
    transactions: transactionsReducer,
  },
});
