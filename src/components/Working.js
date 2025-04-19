import React from "react";
import "./Working.css";
import step1Image from "../assets/step1.png";
import step2Image from "../assets/step2.png";
import step3Image from "../assets/step3.png";
import step4Image from "../assets/step4.png";

const Working = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Learn how our platform makes forex trading easier, faster, and more efficient for everyone.</p>

      <div className="steps-container">
        <div className="step">
          <img src={step1Image} alt="Step 1" />
          <h3>Step 1</h3>
          <h4>Register</h4>
          <p>Create an account to get started with secure forex trading.</p>
        </div>
        <div className="step">
          <img src={step2Image} alt="Step 2" />
          <h3>Step 2</h3>
          <h4>Verify Your Wallet</h4>
          <p>Connect and verify your digital wallet for transactions.</p>
        </div>
        <div className="step">
          <img src={step3Image} alt="Step 3" />
          <h3>Step 3</h3>
          <h4>Start Trading</h4>
          <p>Buy and sell currencies instantly on our platform.</p>
        </div>
        <div className="step">
          <img src={step4Image} alt="Step 4" />
          <h3>Step 4</h3>
          <h4>Earn Profits</h4>
          <p>Track your progress and withdraw your earnings easily.</p>
        </div>
      </div>

      {/* Additional Section */}
      <div className="advanced-method">
        <h2>Three Steps to Smarter Trading</h2>
        <div className="method-step">
          <span className="step-number">1.</span>
          <div className="step-content">
            <h4>Analyze</h4>
            <p>We scan 24/5 for Fair Value Gaps, displacement patterns, and institutional order flow.</p>
          </div>
        </div>
        <div className="method-step">
          <span className="step-number">2.</span>
          <div className="step-content">
            <h4>Predict</h4>
            <p>Receive daily/weekly forecasts with 4H/D1 time frame bias and 15M/1H entry triggers.</p>
          </div>
        </div>
        <div className="method-step">
          <span className="step-number">3.</span>
          <div className="step-content">
            <h4>Execute</h4>
            <p>Trade confidently with annotated charts, liquidity maps, and stop-loss guidance.</p>
          </div>
        </div>

        <button className="cta-button">Explore Our Methodology</button>
      </div>
    </section>
  );
};

export default Working;
