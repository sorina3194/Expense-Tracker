import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction, CATEGORIES } from "./transactionsSlice";
import { v4 as uuidv4 } from "uuid";

const TransactionForm = () => {
  console.log(CATEGORIES);
  const dispatch = useDispatch();
  const [ category, setCategory ] = useState(CATEGORIES[0]);
  const [ amount, setAmount ] = useState(0);
  const [ description, setDescription ] = useState("");

  const handleAddingTransaction = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        category: category,
        amount: amount,
        description: description,
        id: uuidv4(),
      })
    );
    setCategory(CATEGORIES[0]);
    setDescription("");
    setAmount(0);
  };

  return (
    <div className="new-transaction-container">
      <h3>New Transaction</h3>
      <form onSubmit={handleAddingTransaction}>
        <div className="form-wrapper">
          <div className="category-container">
            <label htmlFor="category">Category</label>
            <select
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
          </div>
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              className="m-2"
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
              step="1"
            />
          </div>
          <div className="description">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              className="m-2"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
export default TransactionForm;
