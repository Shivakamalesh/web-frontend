import { createChart } from "lightweight-charts";
import React, { useEffect } from "react";

const CandlestickChart = ({ chartId }) => {
  useEffect(() => {
    const chartContainer = document.getElementById(chartId);

    if (!chartContainer) {
      console.error(`Chart container with ID ${chartId} not found.`);
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
  }, [chartId]);

  return (
    <div
      id={chartId}
      style={{
        height: "400px",
        width: "100%",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default CandlestickChart;
