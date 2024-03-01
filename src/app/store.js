import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../containers/budget/budgetSlice";
import transactionsReducer from '../containers/transaction/transactionsSlice'
import usersReducer from "../containers/usersSlice"

export const store = configureStore({
  reducer: {
    budgets: budgetReducer,
    transactions: transactionsReducer,
    users: usersReducer
  },
});
