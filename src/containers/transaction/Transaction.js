import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "./transactionsSlice";
import { getDownload } from "../../storage";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(removeTransaction(transaction));
  };
  const  handleReceiptDownload = async (e) => {
    const url = await getDownload(transaction.file)
    window.location.href = url;
  }

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
        {transaction.file ?
        <div className="transaction-detail">
          <p>Receipt:</p>
          {/* <input type="file" /> */}
          <button onClick={handleReceiptDownload}>Download Receipt</button>
        </div> : null }

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
