import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetSlice";
import "./budget.css";
import Budget from "./Budget";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <ul className="container-lg ">
      {budgets.map((budget) => (
        <Budget budget={budget} key={budget.category} />
      ))}
    </ul>
  );
};

export default Budgets;
