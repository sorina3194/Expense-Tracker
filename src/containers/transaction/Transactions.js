import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTransactionsByMonth } from "./transactionsSlice";
import "./transactions.css";
import Transaction from "./Transaction";

const Transactions = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const transactionsByMonth = useSelector((state) =>
    selectTransactionsByMonth(state, selectedMonth)
  );

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value, 10));
  };

  return (
    <div className="select-month">
      <div className="transactions-title-wrapper">
        <h1 className="transactions-title">TRANSACTIONS</h1>
        <select
          className="transaction-select"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
      </div>
      <div className="transaction-by-month">
        {transactionsByMonth.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
