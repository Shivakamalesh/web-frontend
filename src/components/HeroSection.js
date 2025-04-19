import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./HeroSection.css";
import heroImage from "../assets/home.webp";

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleClick = () => {
    navigate("/dashboard"); // ✅ navigate to /dashboard route
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlock Institutional-Grade Forex Predictions – Trade with Precision, Not Guesswork</h1>
        <p>
          Harness the Power of Smart Money Strategies and Real-Time Market Insights to Anticipate Price Movements Before They Happen
        </p>
        <button className="cta-button" onClick={handleClick}>Get started now</button>
      </div>
    </section>
  );
};

export default HeroSection;
