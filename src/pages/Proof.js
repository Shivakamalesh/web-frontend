import React from 'react';
import './Proof.css'; 
// import Footer from "../components/Footer";
import usdjpy1 from "../assets/usdjpy1.png"; 
import usdjpy2 from "../assets/usdjpy2.png"; 
import cadjpy1 from "../assets/cadjpy1.png"; 
import cadjpy2 from "../assets/cadjpy2.png"; 
import gbpusd1 from "../assets/gbpusd1.png"; 
import gbpusd2 from "../assets/gbpusd2.png"; 
import gbpjpy1 from "../assets/gbpjpy1.png"; 
import gbpjpy2 from "../assets/gbpjpy2.png"; 
import xauusd1 from "../assets/xauusd1.png"; 
import xauusd2 from "../assets/xauusd2.png"; 

const chartData = [
  {
    id: 1,
    currency: 'USD JPY',
    entry: '139.844',
    sl: '139.694',
    tp: '140.422',
    img1: usdjpy1,
    img2: usdjpy2,
  },
  {
    id: 2,
    currency: 'CAD JPY',
    entry: '103.497',
    sl: '103.301',
    tp: '104.372',
    img1: cadjpy1,
    img2: cadjpy2,
  },
  {
    id: 3,
    currency: 'GBP USD',
    entry: '1.32087',
    sl: '1.31968',
    tp: '1.32540',
    img1: gbpusd1,
    img2: gbpusd2,
  },
  {
    id: 4,
    currency: 'GBP JPY',
    entry: '189.451',
    sl: '188.778',
    tp: '191.320',
    img1: gbpjpy1,
    img2: gbpjpy2,
  },
  {
    id: 5,
    currency: 'XAU USD',
    entry: '2623.06',
    sl: '2622.03',
    tp: '2631.27',
    img1: xauusd1,
    img2: xauusd2,
  },
];

const Chart = ({ data }) => (
  <div className="chart">
    <div className="chart-content">
      <h2>{data.currency}</h2>
      <p><strong>Entry:</strong> {data.entry}</p>
      <p><strong>SL:</strong> {data.sl}</p>
      <p><strong>TP:</strong> {data.tp}</p>
    </div>
    <div className="chart-images">
      <img src={data.img1} alt={`${data.currency} chart 1`} className="chart-img" />
      <img src={data.img2} alt={`${data.currency} chart 2`} className="chart-img" />
    </div>
  </div>
);

const Proof = () => {
  return (
    <div className="app">
      <header>
        <h1>Trading Charts</h1>
      </header>
      <main>
        {chartData.map((chart) => (
          <Chart key={chart.id} data={chart} />
        ))}
      </main>
    </div>
  );
};

export default Proof;
