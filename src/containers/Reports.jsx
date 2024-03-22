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
  ResponsiveContainer,
} from "recharts";
import { selectBudgets } from "./budget/budgetSlice";
import { selectFlatTransactions } from "./transaction/transactionsSlice";
import { filter } from "lodash";

const calculateBudgetGraph = (budgets, transactions) => {
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
  const filteredData = data.filter(
    (chart) => chart.budget !== 0 && chart.transaction !== 0
  );
  return filteredData;
};

const calculateTransactionsByMonth = (transactions) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const graphData = months.map((month, monthIndex) => ({
    name: month,
    moneySpent: transactions
      .filter(
        (transaction) => monthIndex === new Date(transaction.date).getMonth()
      )
      .map((transaction) => transaction.amount)
      .reduce((previous, current) => previous + current, 0),
  }));
  return graphData;
};
export default function Reports() {
  const budgets = useSelector(selectBudgets);
  const transactions = useSelector(selectFlatTransactions);
  const data = calculateBudgetGraph(budgets, transactions);
  const data2 = calculateTransactionsByMonth(transactions);
  return (
    <div className="chart">
      <ResponsiveContainer width="80%" height="40%" aspect={11.0 / 2.0}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="transactions" fill="#ff545c" />
          <Bar dataKey="budget" fill="#117554" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="60%" height="40%" aspect={11.0 / 2.0}>
        <BarChart
          width={1800}
          height={500}
          data={data2}
          margin={{
            right: 30,
            left: 20,
            bottom: 55,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="moneySpent" fill="#117554" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
