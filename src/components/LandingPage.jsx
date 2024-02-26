import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <div className="landing-page-intro">
        <p className="name">Expense Management System</p>
        <p className="text">
          The perfect app to add - view - edit - delete and overall - keep track - of your
          expenses.
        </p>
        <button id="get-started-button" onClick={() => navigate("/login")}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
