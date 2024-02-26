import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <div className="landing-page-intro">
        <h2>ABACUS</h2>
        <p>
          The perfect Expense Management System to add,view,edit,delete and overall keep track of your
          expenses
        </p>
        <button onClick={() => navigate("/login")}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
