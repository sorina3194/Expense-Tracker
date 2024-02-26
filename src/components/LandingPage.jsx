import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-intro-container">
      <h2>Expense Management System</h2>
      <p>The perfect app to add,view,edit,delete and overall keep track of your expenses</p>
      <button onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
};

export default LandingPage;
