import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from "../assets/1.jpg"; 


const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

      
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        
        <Link to="/" className="logo-container">
          <img 
            src={logo} 
            alt="Logo" 
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buyshare">Market</Link></li>
          {/* <li><Link to="/market">Market1</Link></li>cd */}
          {/* <li><Link to="/seller">Seller</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/calendar">Calendar</Link></li> 
          <li><Link to="/proof">Proof</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/dashboard">DashBoard</Link></li>
        </ul>
      </div>

    
      <div className="navbar-right">
        
        <div className="clock">{time}</div>

        <Link to="/wallet" className="wallet-btn">
          Wallet
        </Link>
        <Link to="/signup" className="auth-btn">
          Sign Up
        </Link>
        <Link to="/login" className="auth-btn">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
