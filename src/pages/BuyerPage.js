import React from "react";
import { useNavigate } from "react-router-dom";
import "./BuyerPage.css";

const forexPairs = [
  { id: 1, pair: "USD/JPY", description: "Trade the US Dollar vs Japanese Yen." },
  { id: 2, pair: "EUR/USD", description: "Most traded currency pair in forex." },
  { id: 3, pair: "GBP/USD", description: "British Pound vs US Dollar exchange." },
  { id: 4, pair: "AUD/USD", description: "Australian Dollar against US Dollar." },
  { id: 5, pair: "XAU/USD", description: "Gold (XAU) priced in US Dollars." },
];

const BuyerPage = () => {
  const navigate = useNavigate(); 

  const handleCardClick = (pair) => {
    navigate(`/buyer/${encodeURIComponent(pair)}`);
  };

  return (
    <div className="buyer-page">
      <header className="buyer-header">
        <h1>Find the Best Deals on Forex Assets</h1>
        <p>Secure and instant forex trading at your fingertips.</p>
      </header>

      <section className="forex-market">
        <h2>Popular Forex Pairs</h2>
        <div className="forex-grid">
          {forexPairs.map((pair) => (
            <div key={pair.id} className="forex-card">
              <h3>{pair.pair}</h3>
              <p>{pair.description}</p>
              
              <div className="button-group">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="details-button"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/buy/${encodeURIComponent(pair.pair)}`)}
                  className="buy-button"
                >
                  Buy the Product
                </button>
                <button
                  onClick={() => navigate(`/sell/${encodeURIComponent(pair.pair)}`)}
                  className="sell-button"
                >
                  Sell the Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyerPage;
