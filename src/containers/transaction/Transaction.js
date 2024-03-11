import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "./transactionsSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeTransaction(transaction));
  };

  return (
    <li className="new-transaction-card">
      <div className="transactions-details">
        <div className="transaction-detail">
          <p>Category:</p>
          <p> {transaction.category}</p>
        </div>
        <div className="transaction-detail">
          <p>Amount:</p>
          <p> {transaction.amount}</p>
        </div>
        <div className="transaction-detail">
          <p>Description:</p>
          <p> {transaction.description}</p>
        </div>
        <div className="transaction-detail">
          <p>Date:</p>
          <p>{transaction.date}</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="delete-transaction-button"
        aria-label="Remove"
      >
        Remove Transaction
      </button>
    </li>
  );
};
export default Transaction;
