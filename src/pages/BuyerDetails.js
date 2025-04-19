import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BuyerDetails.css";

const BuyerDetails = () => {
  const { pair } = useParams();
  const navigate = useNavigate();

  return (
    <div className="buyer-details">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="details-container">
        <h1 className="details-title">{pair} Trading Details</h1>
        <p className="details-description">
          Learn about the best rates, live price trends, and analysis for {pair}.
        </p>
        
        <div className="chart-container">
          <img src="/src/assets/chart.png" alt="Forex Chart" className="chart-image" />
        </div>

        <div className="info-box">
          <h3>Market Overview</h3>
          <p>Live exchange rate updates and latest market insights.</p>
        </div>

        <div className="cta-section">
          <button className="trade-button">Start Trading</button>
          <button className="compare-button">Compare Rates</button>
        </div>
      </div>
    </div>
  );
};

export default BuyerDetails;
