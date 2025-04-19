import React from "react";
import "./WhyChooseUs.css";
import { FaChartLine, FaBrain, FaClock, FaCheckCircle } from "react-icons/fa"; // Import icons

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <p className="section-subtitle">Your Edge in the Forex Market Starts Here</p>

      <div className="features-container">
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Institutional Insights, Simplified</h3>
          <p>We decode complex market structures, liquidity pools, and order blocks used by banks into actionable predictions.</p>
        </div>

        <div className="feature-card">
          <FaBrain className="feature-icon" />
          <h3>AI-Driven Accuracy</h3>
          <p>Our algorithms blend ICT methodology, price action patterns, and real-time liquidity analysis for high-probability setups.</p>
        </div>

        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>Timing is Everything</h3>
          <p>Predict volatility spikes, trend reversals, and breakout zones before they happen, with alerts optimized for key trading windows.</p>
        </div>

        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>No Fluff, Just Results</h3>
          <p>Get clear entry/exit levels, risk-reward ratios, and profit targets – no vague predictions or overhyped signals.</p>
        </div>
      </div>

      <div className="cta-container">
        <button className="cta-button">Get Started – See Tomorrow’s Opportunities Today</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
