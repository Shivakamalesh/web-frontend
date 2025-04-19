import React from "react";
import "./Footer.css";
import logo from "../assets/1.jpg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="AttaX Logo" className="footer-logo-img" />
          <p>Your trusted platform for trading and investment.</p>
        </div>

        {/* Products Section */}
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li><a href="/supercharts">Supercharts</a></li>
            <li><a href="/stock-screener">Stock Screener</a></li>
            <li><a href="/etf-screener">ETF Screener</a></li>
            <li><a href="/crypto-screener">Crypto Coins Screener</a></li>
            <li><a href="/economic-calendar">Economic Calendar</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li><a href="/refer">Refer a Friend</a></li>
            <li><a href="/ideas">Ideas</a></li>
            <li><a href="/scripts">Scripts</a></li>
            <li><a href="/moderators">Moderators</a></li>
            <li><a href="/chat">Chat</a></li>
          </ul>
        </div>

        {/* For Business Section */}
        <div className="footer-column">
          <h3>For Business</h3>
          <ul>
            <li><a href="/advertising">Advertising</a></li>
            <li><a href="/charting-libraries">Charting Libraries</a></li>
            <li><a href="/integration">Brokerage Integration</a></li>
            <li><a href="/partner-program">Partner Program</a></li>
            <li><a href="/education-program">Education Program</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AttaX. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/glitch_of_wallstreet/?utm_source=qr&igsh=bDJqM2FrdXFueXUy#" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
