import React from "react";
import { useSelector } from "react-redux";
import "./reports.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { selectBudgets } from "./budget/budgetSlice";
import { selectFlatTransactions } from "./transaction/transactionsSlice";
import { filter } from "lodash";

const calculate = (budgets, transactions) => {
  const data = budgets.map((budget) => {
    const chart = {
      name: budget.category,
      budget: budget.amount,
      transactions: transactions
        .filter((transaction) => transaction.category === budget.category)
        .map((transaction) => transaction.amount)
        .reduce((previous, current) => previous + current, 0),
    };
    return chart;
  });
  console.log(data);
  const filteredData = data.filter(
    (chart) => chart.budget !== 0 && chart.transaction !== 0
  );
  console.log(filteredData);
  return filteredData;
};

export default function Reports() {
  const budgets = useSelector(selectBudgets);
  const transactions = useSelector(selectFlatTransactions);
  const data = calculate(budgets, transactions);
  return (
    <div className="chart">
      <BarChart
        width={2000}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <XAxis axisLine={false} interval={1} scale="band" xAxisId="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="transactions" fill="#ff545c" />
        <Bar dataKey="budget" fill="#13ffb0" />
      </BarChart>
    </div>
  );
}
