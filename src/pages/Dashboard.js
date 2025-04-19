  import React, { useEffect } from 'react';
  import "./Dashboard.css"

  const Dashboard = () => {
    useEffect(() => {
      
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        new window.TradingView.widget({
          "container_id": "tradingview-widget",
          "autosize": true,
          "symbol": "FX:EURUSD",
          "interval": "240",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "850",
          "support_host": "https://www.tradingview.com"
        });
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); 
      };
    }, []);

    return (
      <div className="tradingview-widget-container">
        <div id="tradingview-widget"></div>
        <div className="tradingview-widget-copyright">
          {/* <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
            <span className="blue-text">Track all markets on TradingView</span>
          </a> */}
        </div>
      </div>
    );
  };

  export default Dashboard;
