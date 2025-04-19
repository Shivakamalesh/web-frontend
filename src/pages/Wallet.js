import React, { useState } from "react";
import "./Wallet.css";

const Wallet = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Wallet details
  const [walletBalance, setWalletBalance] = useState(1000); // Initial balance
  const [shares, setShares] = useState(5); // Initial shares
  const [addAmount, setAddAmount] = useState("");

  //Login details
  const validUsername = "user123";
  const validPassword = "password123";

  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  // Add money to wallet
  const handleAddMoney = () => {
    if (addAmount && !isNaN(addAmount) && Number(addAmount) > 0) {
      setWalletBalance(walletBalance + Number(addAmount));
      setAddAmount("");
    } else {
      alert("Enter a valid amount!");
    }
  };

  return (
    <div className="wallet-container">
      
      {!isLoggedIn ? (
        <div className="login-container">
          <h1>Wallet Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      ) : (
        
        <div className="wallet-details">
          <h1>Welcome to Your Wallet</h1>
          <p><strong>Wallet Balance:</strong> ${walletBalance}</p>
          <p><strong>Shares Bought:</strong> {shares} shares</p>
          
         
          <div className="add-money">
            <h2>Add Money to Wallet</h2>
            <input
              type="number"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <button onClick={handleAddMoney} className="add-btn">
              Add Money
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
