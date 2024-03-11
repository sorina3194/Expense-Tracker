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
        <p
          className="text"
          style={{
            color: "grey",
            textShadow: "5px 1px 2px rgb(255, 255, 255)",
            fontSize: "60px",
            padding: "140px",
          }}
        >
          Welcome to ABACUS
          <p
            style={{
              color: "grey",
              textShadow: "5px 1px 2px rgb(255, 255, 255)",
              fontSize: "100px",
              margin: "20px",
            }}
          >
            THE EXPENSE MANAGEMENT SYSTEM
          </p>
          to keep track of your income and expenses.
        </p>
        {userId ? null : (
          <button id="get-started-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        )}
      </div>
      <div className="footer">
        <Link to="/products">Products</Link>
        <Link to="/aboutUs">About Us</Link>
      </div>
    </div>
  );
};

export default LandingPage;
