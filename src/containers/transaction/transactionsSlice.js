import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectUserId } from "../usersSlice";
import {
  addTransaction,
  deleteTransaction,
  userTransactions,
} from "../../firebase";
import { groupBy, mergeWith } from "lodash";

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

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, thunkApi) => {
    const userId = selectUserId(thunkApi.getState());
    const response = await userTransactions(userId);
    return response || {};
  }
);

export const addNewTransaction = createAsyncThunk(
  "transactions/addNewTransaction",
  async (transaction, thunkApi) => {
    console.log(transaction);
    const userId = selectUserId(thunkApi.getState());

    await addTransaction(userId, transaction);
    return transaction;
  }
);

export const removeTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transaction, thunkApi) => {
    console.log(transaction);
    const userId = selectUserId(thunkApi.getState());

    await deleteTransaction(userId, transaction);
    return transaction;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { transactions: initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      Object.keys(action.payload).forEach(
        (key) => (action.payload[key] = { ...action.payload[key], key })
      );
      const transactions = Object.values(action.payload);
      const transactionsByCategories = groupBy(transactions, (t) => t.category);
      state.transactions = mergeWith(
        transactionsByCategories,
        state.transactions,
        (newTransactions, oldTransactions) => newTransactions
      );
    });
    builder.addCase(addNewTransaction.fulfilled, (state, action) => {
      state.transactions[action.payload.category].push(action.payload);
    });
    builder.addCase(removeTransaction.fulfilled, (state, action) => {
      state.transactions[action.payload.category] = state[
        action.payload.category
      ].filter((transaction) => transaction.id !== action.payload.id);
    });
  },
});

export const selectTransactions = (state) => state.transactions.transactions;
export const selectFlatTransactions = (state) =>
  Object.values(state.transactions.transactions).flat();
export default transactionsSlice.reducer;
