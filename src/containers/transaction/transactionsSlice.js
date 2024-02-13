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
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);


const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      state[action.payload.category] = state[action.payload.category].filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
  },
});

export const selectTransactions = (state) => state.transactions
export const selectFlatTransactions = (state) => Object.values(state.transactions).flat()
export const { addTransaction, deleteTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer
