import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";
import { useParams } from "react-router-dom";

const PredictionPage = () => {
  const { currencyPair } = useParams();

  useEffect(() => {
    const chartContainer = document.getElementById("candlestick-chart");

    if (!chartContainer) {
      console.error("Chart container not found.");
      return;
    }

    const chart = createChart(chartContainer, {
      width: chartContainer.offsetWidth,
      height: chartContainer.offsetHeight,
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const data = [
      { time: 1672444800, open: 1.07097, high: 1.09326, low: 1.04853, close: 1.0861 },
      { time: 1675123200, open: 1.10129, high: 1.10266, low: 1.05335, close: 1.05773 },
      { time: 1677628800, open: 1.06689, high: 1.0929, low: 1.05203, close: 1.09047 },
      { time: 1680307200, open: 1.08033, high: 1.10941, low: 1.07893, close: 1.10109 },
      { time: 1682899200, open: 1.09692, high: 1.10914, low: 1.06517, close: 1.06952 },
    ];

    candlestickSeries.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainer.offsetWidth,
        height: chartContainer.offsetHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        Prediction for {currencyPair}
      </h1>
      <div
        id="candlestick-chart"
        style={{
          height: "400px",
          width: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "2rem",
        }}
      ></div>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "center" }}>
        Detailed predictions and insights for the <strong>{currencyPair}</strong> pair will be displayed here.
      </p>
      <p style={{ fontStyle: "italic", color: "gray", textAlign: "center" }}>
        (This is where prediction logic or data from a backend system can be integrated.)
      </p>

      {/* Next 48-Hour Outlook Section */}
      <div style={{
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "2rem",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#333" }}>
          Next 48-Hour Outlook
        </h2>
        <div style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          <p><strong>🔹 Key Level:</strong> 1.0850 (Order Block Support)</p>
          <p><strong>📈 Bias:</strong> <span style={{ color: "green", fontWeight: "bold" }}>Bullish</span> – Targeting 1.0950 FVG Zone</p>
          <p><strong>⏳ Trigger:</strong> London Session Liquidity Sweep Below 1.0820</p>
        </div>
        <button style={{
          marginTop: "15px",
          padding: "12px 24px",
          background: "#26a69a",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}>
          See Full Market Analysis
        </button>
      </div>
    </div>
  );
};

export default PredictionPage;
