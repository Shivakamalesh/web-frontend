import React from "react";
import "./Mobile.css";
import mobileHomeImg from "../assets/mobile-home.jpg"; // Ensure the path is correct

const Mobile = () => {
  return (
    <div>
        <h2>We have Mobile view</h2>
    <div className="homepage-container">
      {/* Left Side - Image */}
      <div className="image-container">
        <img
          src={mobileHomeImg}
          alt="Forex Trading"
          className="homepage-image"
        />
      </div>

      {/* Right Side - Content */}
      <div className="content-container">
        <h1 className="homepage-title">Trade Forex Anytime, Anywhere</h1>
        <p className="homepage-text">
        Enjoy seamless financial market trading without needing a desktop computer! Simply install the mobile version of GOW on your Android or iOS smartphone or tablet.

Our mobile application offers:

Complete Trading Functions: Execute trades, set stop-loss/take-profit levels, and manage positions easily.
Advanced Analytical Tools: Access real-time charts, technical indicators, and graphical objects for in-depth market analysis.
Account Monitoring: Check your account status, view balance updates, and review your trading history anytime.
User-Centric Design: Navigate effortlessly with an intuitive interface tailored for both beginners and experts.
That's all it takes! With GOW, the financial markets are always at your fingertips—anytime, anywhere.


        </p>
        <p className="homepage-text">
        👉 Download GOW now and start trading on the go!
        </p>
        <div className="button-container">
          <button className="learn-more-button">CLICK HERE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mobile;
