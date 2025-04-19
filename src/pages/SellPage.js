import React, { useState } from "react";
import "./SellPage.css";

const SellPage = () => {
  const [shares, setShares] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle selling shares
  const handleSell = (e) => {
    e.preventDefault();
    if (form.name && form.price && form.quantity) {
      setShares([...shares, { ...form, id: Date.now() }]);
      setForm({ name: "", price: "", quantity: "" });
    }
  };

  return (
    <div className="sell-page">
      <h1>📊 Seller Dashboard</h1>
      <p>Manage your listings, track sales, and maximize profits.</p>

      {/* Earnings Overview */}
      <section className="earnings">
        <h2>💰 Earnings Overview</h2>
        <p><strong>Total Revenue:</strong> ${shares.reduce((acc, share) => acc + share.price * share.quantity, 0).toFixed(2)}</p>
        <p><strong>Total Shares Sold:</strong> {shares.length}</p>
      </section>

      {/* Sell Shares Form */}
      <section className="sell-shares">
        <h2>📈 List Shares for Sale</h2>
        <form onSubmit={handleSell}>
          <input
            type="text"
            name="name"
            placeholder="Stock Name (e.g., EUR/USD)"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price per Share ($)"
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity of Shares"
            value={form.quantity}
            onChange={handleChange}
            required
          />
          <button type="submit" className="sell-now-button">Sell Now</button>
        </form>
      </section>

      {/* Active Listings */}
      <section className="active-listings">
        <h2>📊 Active Listings</h2>
        {shares.length === 0 ? (
          <p>No active listings. Start selling now!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Stock Name</th>
                <th>Price ($)</th>
                <th>Quantity</th>
                <th>Total ($)</th>
              </tr>
            </thead>
            <tbody>
              {shares.map((share) => (
                <tr key={share.id}>
                  <td>{share.name}</td>
                  <td>${share.price}</td>
                  <td>{share.quantity}</td>
                  <td>${(share.price * share.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default SellPage;
