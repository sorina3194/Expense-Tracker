import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, CATEGORIES } from "./transactionsSlice";
import { v4 as uuidv4 } from "uuid";

const TransactionForm = () => {
  console.log(CATEGORIES);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleAddingTransaction = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        category: category,
        date: date,
        amount: Number(amount),
        description: description,
        id: uuidv4(),
      })
    );
    setCategory(CATEGORIES[0]);
    setDate("");
    setAmount(0);
    setDescription("");
  };

  return (
    <div className="new-transaction-container">
      <form className="transaction-form" onSubmit={handleAddingTransaction}>
        <h2
          style={{
            height: 40,
            width: 600,
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          Transaction details
        </h2>
        <div className="transaction-text-container">
          <ul className="transaction-text">
            <li className="category">Category</li>
            <li className="date">Date</li>
            <li className="amount">Amount</li>
            <li className="description">Description</li>
          </ul>

          <div className="transactions-input">
            <select
              style={{ padding: 5 }}
              id="category"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            >
              {" "}
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              type="date"
              onChange={(e) => setDate(e.currentTarget.value)}
              value={date}
            />
            <input
              id="amount"
              className="m-2"
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              step="1"
            />
            <input
              id="description"
              className="m-2"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
        </div>

        <button className="add-transaction-button">Add Transaction</button>
      </form>
    </div>
  );
};
export default TransactionForm;
