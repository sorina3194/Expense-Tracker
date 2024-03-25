import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./landingPage.css";
import { useSelector } from "react-redux";
import { selectUserId } from "../containers/usersSlice";

const LandingPage = () => {
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);

  return (
    <div className="landing-page-container">
      <div className="landing-page-intro">
        <p className="text">Welcome to ABACUS </p>
        <span className="expense-text">THE EXPENSE MANAGEMENT SYSTEM</span>
        <p className="text"> to keep track of your income and expenses.</p>
        {userId ? null : (
          <button id="get-started-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
