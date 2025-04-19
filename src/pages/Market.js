import React from "react";
import { useNavigate } from "react-router-dom";
import "./Market.css";
import CandlestickChart from "./CandlestickChart";

const currencyPairs = [
  {
    id: 1,
    pair: "USD/JPY",
    description: "Represents the value of 1 US Dollar in Japanese Yen.",
  },
  {
    id: 2,
    pair: "EUR/USD",
    description: "The most traded currency pair in global markets.",
    hasChart: true,
  },
  {
    id: 3,
    pair: "XAU/USD",
    description: "Gold (XAU) priced in US Dollars.",
  },
  {
    id: 4,
    pair: "GBP/USD",
    description: "British Pound versus US Dollar.",
  },
  {
    id: 5,
    pair: "AUD/USD",
    description: "Australian Dollar versus US Dollar.",
  },
];

const MarketPage = () => {
  const navigate = useNavigate();

  const handlePrediction = (pair) => {
    navigate(`/prediction/${encodeURIComponent(pair)}`);
  };

  return (
    <div className="market-page">
      <h1 className="market-title">Market Page</h1>
      <div className="market-grid">
        {currencyPairs.map((currency) => (
          <div key={currency.id} className="market-card">
            <h2 className="market-pair">{currency.pair}</h2>
            <div className="market-graph">
              {currency.hasChart ? (
                <CandlestickChart chartId={`chart-${currency.id}`} />
              ) : (
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "gray",
                    padding: "1rem",
                  }}
                >
                  Graph not available for {currency.pair}
                </span>
              )}
            </div>
            <p className="market-description">{currency.description}</p>
            <button
              onClick={() => handlePrediction(currency.pair)}
              className="market-button"
            >
              View Prediction
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
