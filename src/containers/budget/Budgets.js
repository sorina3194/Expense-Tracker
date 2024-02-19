import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetSlice";
import "./budget.css";
import Budget from "./Budget";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <div className="container-lg">
      {budgets.map((budget, index) => (
        <Budget budget={budget} key={budget.category} />
      ))}
    </div>
  );
};

export default Budgets;
