import React from "react";
import "./PopularCurrencies.css";

const PopularCurrencies = () => {
  const currencies = [
    {
      pair: "USD/JPY",
      description: "Represents the value of 1 US Dollar in Japanese Yen. A highly traded pair influenced by the US and Japanese economies.",
    },
    {
      pair: "EUR/USD",
      description: "The most traded currency pair, showing the value of 1 Euro in US Dollars. Influenced by European and US markets.",
    },
    {
      pair: "XAU/USD",
      description: "Gold (XAU) priced in US Dollars. Popular among investors for hedging against inflation.",
    },
    {
      pair: "GBP/USD",
      description: "Known as 'Cable,' this pair tracks the British Pound's value against the US Dollar, reflecting UK and US economic trends.",
    },
    {
      pair: "AUD/USD",
      description: "The Australian Dollar against the US Dollar, impacted by commodity prices and global trade.",
    },
  ];

  return (
    <section className="popular-currencies">
      <h2>Popular Currencies</h2>
      <p>Explore the most traded forex pairs globally.</p>
      <div className="currency-grid">
        {currencies.map((currency, index) => (
          <div className="currency-card" key={index}>
            <h3>{currency.pair}</h3>
            <p>{currency.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCurrencies;
