import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <nav className="nav">
      <a href="/" className="abacus-logo">
        ABACUS
      </a>
      <div className="nav-list">
        <a href="/budgets">Budgets</a>
        <a href="/transactions">Transactions</a>
      </div>
    </nav>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
