import React from "react";
import "./Desktop.css";
import desktopHomeImg from "../assets/desktop.png"; // Ensure the path is correct

const Desktop = () => {
  return (
    <div>
        <h2>We have desktop view</h2>
    <div className="desktop-homepage-container">
        
      {/* Right Side - Image */}
      <div className="desktop-image-container">
        <img
          src={desktopHomeImg}
          alt="Forex Trading"
          className="desktop-homepage-image"
        />
      </div>

      {/* Left Side - Content */}
      <div className="desktop-content-container">
        <h1 className="desktop-homepage-title">Trade Forex Anytime, Anywhere</h1>
        <p className="desktop-homepage-text">
        Experience the power of trading on a full-fledged desktop platform with GOW, designed for professionals and beginners alike. The desktop version provides unmatched performance, extensive tools, and a seamless user interface to elevate your trading journey.

Key Features of GOW Desktop Platform:
Comprehensive Trading Tools: Execute trades with precision, manage orders, and monitor real-time price movements.
Advanced Charting Capabilities: Utilize multiple chart types, timeframes, and technical indicators to analyze market trends effectively.
Market Depth Analysis: Access detailed insights into market liquidity and order book data.
Customizable Workspace: Tailor the platform to your trading style with customizable layouts and hotkeys.
Integrated News Feed: Stay updated with real-time market news and economic events directly within the platform.
Enhanced Security: Enjoy peace of mind with advanced encryption and two-factor authentication.

        </p>
        <p className="desktop-homepage-text">
        The desktop platform is optimized for performance, ensuring that you never miss an opportunity in the fast-paced world of financial trading. Whether you're a day trader or a long-term investor, GOW equips you with everything you need for success.</p>
<p className="desktop-homepage-text">
👉 Download GOW Desktop Platform now and unlock the full potential of financial market trading!
        </p>
        <div className="desktop-button-container">
          <button className="desktop-learn-more-button">CLICK HERE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Desktop;
