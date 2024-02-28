import React from "react";
import { useSelector } from "react-redux";
import { selectFlatTransactions } from "./transactionsSlice";
import "./transactions.css";
import Transaction from "./Transaction";

const Transactions = () => {
  const transactions = useSelector(selectFlatTransactions);
  console.log(transactions);
  return (
      <div className="card">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
  );
};

export default Transactions;
