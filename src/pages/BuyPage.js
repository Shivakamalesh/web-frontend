import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BuyPage.css";

const BuyPage = () => {
  const { pair } = useParams();

  // Placeholder live price (In real-world, fetch from API)
  const livePrice = 1500.25;

  // State for quantity of shares
  const [quantity, setQuantity] = useState(1);

  // Calculate total price
  const totalPrice = (quantity * livePrice).toFixed(2);

  return (
    <div className="buy-page">
      <h1>Buy {pair}</h1>
      <p>Secure your investment in {pair} with real-time pricing.</p>

      <div className="buy-details">
        <h2>Transaction Details</h2>
        <ul>
          <li><strong>Live Market Price:</strong> ${livePrice} per share</li>
          <li><strong>Minimum Order:</strong> 1 share</li>
          <li><strong>Payment Methods:</strong> Bank Transfer, Crypto, PayPal</li>
          <li><strong>Trade Security:</strong> Verified Sellers & Escrow System</li>
        </ul>

        <div className="quantity-section">
          <label htmlFor="quantity">Quantity:</label>
          <input 
            type="number" 
            id="quantity" 
            value={quantity} 
            min="1" 
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <p className="total-price"><strong>Total Price:</strong> ${totalPrice}</p>

        <button className="buy-now-button">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default BuyPage;
