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
        <p>{transaction.category}</p>
        <p>{transaction.date}</p>
        <p>{transaction.amount}</p>
        <div className="description">{transaction.description}</div>
      </div>
      <button onClick={handleDelete} className="delete-transaction" aria-label="Remove">
        X
      </button>
    </li>
  );
};
export default Transaction;
