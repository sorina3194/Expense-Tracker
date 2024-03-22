import React from "react";
import "./products.css";
const Products = () => {
  return (
    <div className="products-container">
      <div className="card-group">
        <div className="card">
          <h2 class="card-title">EXPENSE TRACKING</h2>
          <p>
            Easily log your expenses in real - time, categorize transactions,
            and gain insights into your spending habits.
          </p>
        </div>
        <div className="card">
          <h2 class="card-title">BUDGET MANAGEMENT</h2>
          <p>
            Set personalized budgets for different categories and track your
            progress effortlessly.
          </p>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <h2 class="card-title">FINANCIAL REPORTING</h2>

          <p>
            Generate detailed reports and visualizations to analyze your
            financial data and make informed decisions.
          </p>
        </div>
        <div className="card">
          <h2 class="card-title">SECURE & PRIVATE</h2>
          <p>
            For the security and privacy of your financial information, we use
            industry-standard encryption and security protocols to keep your
            data safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
