import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "./transactionsSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTransaction(transaction));
  };

  return (
    <li className="new-transaction">
      <div>
        <p>{transaction.amount}</p>
        <p>{transaction.category}</p>
        <div className="description">{transaction.description}</div>
      </div>
      <button onClick={handleDelete} aria-label="Remove">
        X
      </button>
    </li>
  );
};
export default Transaction;
