import React from "react";
import { useSelector } from "react-redux";
import { selectFlatTransactions } from "./transactionsSlice";
import "./transactions.css";
import Transaction from "./Transaction";

const Transactions = () => {
  const transactions = useSelector(selectFlatTransactions);
  console.log(transactions);
  return (
    <ul className="container-lg ">
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </ul>
  );
};

export default Transactions;
