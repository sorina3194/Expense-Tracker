import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBudget } from "./budgetSlice";
import "./budget.css";
import { selectTransactions } from "../transaction/transactionsSlice";

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
  Savings: "fa-solid fa-credit-card fa-xl",
  Donations: "fa-solid fa-hand-holding-heart fa-xl",
  Insurance: "fa-solid fa-car-burst fa-xl",
  Household: "fa-solid fa-kitchen-set fa-xl",
  Childcare: "fa-solid fa-children fa-xl",
  Pets: "fa-solid fa-paw fa-xl",
  Subscriptions: "fa-solid fa-bell fa-xl",
  Taxes: "fa-solid fa-percent fa-xl",
  Miscellaneous: "fa-solid fa-list-ul fa-xl",
};

const Budget = ({ budget }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();

  const iconClass = budgetIcons[budget.category];

  const transactions = useSelector(selectTransactions)[budget.category];

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBudget({ category: budget.category, amount: amount }));
    setAmount("");
  };

  const fundsRemaining =
    budget.amount - transactions.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className="budget-card">
      <i className={iconClass}></i>
      <h3 className="budget-category">{budget.category}</h3>
      <h5 className="budget-amount">Funds remaining: {fundsRemaining}</h5>
      <form className="budgetForm" onSubmit={handleEdit}>
        <h3>Budget:</h3>
        <input
          className="m-3"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
          step="1"
        />
        <button className="updateButton">Update</button>
      </form>
    </div>
  );
};

export default Budget;
