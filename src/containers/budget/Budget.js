import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editBudget } from "./budgetSlice";
import "./budget.css";

const Budget = ({ budget }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(budget.amount);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBudget({ category: budget.category, amount: amount }));
  };
  
  return (
    <div id="budget-container" className="m-2">
      <div id="budget-list">
        <div className="category-container">
          <p>Category</p>
          <h2 className="budget-category">{budget.category}</h2>
          <p className="budget-amount">Funds remaining: {budget.amount}</p>
        </div>
        <form onSubmit={handleEdit}>
          <p>Set Budget:</p>
          <input
            className="m-2"
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            step="1"
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Budget;
