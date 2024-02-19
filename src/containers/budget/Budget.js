import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBudget } from "./budgetSlice";
import "./budget.css";

const budgetIcons = {
  Housing: "fa-solid fa-house fa-xl",
  Food: "fa-solid fa-utensils fa-xl",
  Transportation: "fa-solid fa-car-side fa-xl",
  Utilities: "fa-solid fa-lightbulb fa-xl",
  Clothing: "fa-solid fa-shirt fa-xl",
  Healthcare: "fa-solid fa-house-medical fa-xl",
  Personal: "fa-solid fa-star fa-xl",
  Education: "fa-solid fa-book fa-xl",
  Entertainment: "fa-solid fa-dice fa-xl",
  // Add more categories and icons as needed
};

const Budget = ({ budget }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(budget.amount);
  const iconClass = budgetIcons[budget.category];

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBudget({ category: budget.category, amount: amount }));
  };

  return (
    <div id="budget-container" className="m-2">
      <div id="budget-list">
        <div className="category-container">
          <i className={iconClass}></i>
          <h3 className="budget-category">{budget.category}</h3>
          <h5 className="budget-amount">Funds remaining: {budget.amount}</h5>
        </div>
        <form className="budgetForm" onSubmit={handleEdit}>
          <h3>Budget:</h3>
          <input
            className="m-3"
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            step="1"
          />
          <button className="updateButton">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Budget;
