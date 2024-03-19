import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "./transactionsSlice";
import { getDownload } from "../../storage";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(removeTransaction(transaction));
  };
  const handleReceiptDownload = async (e) => {
    const url = await getDownload(transaction.file);
    window.location.href = url;
  };

  return (
    <div className="main-transactions">
      <div className="new-transaction-card">
        <div className="transactions-details">
          <div className="transaction-detail">
            <p>CATEGORY:</p>
            <p> {transaction.category}</p>
          </div>
          <div className="transaction-detail">
            <p>AMOUNT:</p>
            <p> {transaction.amount}</p>
          </div>
          <div className="transaction-detail">
            <p>DESCRIPTION:</p>
            <p> {transaction.description}</p>
          </div>
          <div className="transaction-detail">
            <p>DATE:</p>
            <p>{transaction.date}</p>
          </div>
          {transaction.file ? (
            <div className="transaction-detail">
              <p>RECEIPT:</p>
              {/* <input type="file" /> */}
              <button
                className="download-button"
                onClick={handleReceiptDownload}
              >
                Download Receipt
              </button>
            </div>
          ) : null}
        </div>
        <button
          onClick={handleDelete}
          className="delete-transaction-button"
          aria-label="Remove"
        >
          Remove Transaction
        </button>
      </div>
    </div>
  );
};
export default Transaction;
