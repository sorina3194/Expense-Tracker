import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <div className="landing-page-intro">
        <p className="text">
          Welcome to ABACUS
          <p style={{ color: "grey", fontSize: "100px" }}>
            THE EXPENSE MANAGEMENT SYSTEM
          </p>{" "}
          to keep track of your income and expenses.
        </p>
      <button id="get-started-button" onClick={() => navigate("/login")}>
        Get Started
      </button>
      </div>
    </div>
  );
};

export default LandingPage;
