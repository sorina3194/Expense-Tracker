import React from "react";
import { useSelector } from "react-redux";
import { selectFlatTransactions } from "./transactionsSlice";
import "./transactions.css";
import Transaction from "./Transaction";

const Transactions = () => {
  const transactions = useSelector(selectFlatTransactions);
  console.log(transactions);
  return (
    <div className="container-lg" style={{ border: "black 10px solid" }}>
      <div className="transactions">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
