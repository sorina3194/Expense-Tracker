import React from "react";
import { useSelector } from "react-redux";
import { selectBudgets } from "./budgetSlice";
import "./budget.css";
import Budget from "./Budget";

const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return (
    <>
      <h1 className="budgets-title"> Budgets </h1>
      <div className="budgets-container">
        {budgets.map((budget, index) => (
          <Budget budget={budget} key={budget.category} />
        ))}
      </div>
    </>
  );
};

export default Budgets;
