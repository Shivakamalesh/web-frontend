// import React, { useState } from "react";
// import ReactCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./Calendar.css";

// const Calendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [events] = useState([
//     {
//       date: "2025-01-22",
//       time: "09:00 AM",
//       currency: "USD",  
//       event: "Federal Reserve Meeting",
//       actual: "1.50%",
//       forecast: "1.45%",
//       previous: "1.40%",
//       impact: "high",
//     },
//     {
//       date: "2025-01-23",
//       time: "02:00 PM",
//       currency: "EUR",
//       event: "ECB Interest Rate Decision",
//       actual: "0.75%",
//       forecast: "0.70%",
//       previous: "0.60%",
//       impact: "moderate",
//     },
//     {
//       date: "2025-01-24",
//       time: "11:00 AM",
//       currency: "GBP",
//       event: "BoE Monetary Policy Report",
//       actual: "1.25%",
//       forecast: "1.20%",
//       previous: "1.15%",
//       impact: "average",
//     },
//     {
//       date: "2025-01-25",
//       time: "03:00 PM",
//       currency: "JPY",
//       event: "Bank of Japan Rate Announcement",
//       actual: "-0.10%",
//       forecast: "-0.15%",
//       previous: "-0.10%",
//       impact: "high",
//     },
//     {
//       date: "2025-01-26",
//       time: "10:00 AM",
//       currency: "CHF",
//       event: "Swiss National Bank Policy Assessment",
//       actual: "0.50%",
//       forecast: "0.55%",
//       previous: "0.45%",
//       impact: "moderate",
//     },
//   ]);

//   return (
//     <div className="calendar-container">
//       {/* Left Side: Live Calendar */}
//       <div className="calendar-sidebar">
//         <ReactCalendar onChange={setDate} value={date} />
//         <div className="navigation">
//           <a href="#today">Today</a>
//           <a href="#this-week">This Week</a>
//           <a href="#next-week">Next Week</a>
//         </div>
//       </div>

//       {/* Right Side: Events Table */}
//       <div className="event-list">
//         <h2>Economic Events</h2>
//         {/* Color Explanation */}
//         <div className="impact-legend">
//           <p>
//             <span className="legend-high">Red</span>: High impact events — can significantly affect forex markets.
//           </p>
//           <p>
//             <span className="legend-moderate">Orange</span>: Moderate impact events — may moderately influence forex markets.
//           </p>
//           <p>
//             <span className="legend-average">Yellow</span>: Average impact events — generally have minimal effects.
//           </p>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Currency</th>
//               <th>Event</th>
//               <th>Actual</th>
//               <th>Forecast</th>
//               <th>Previous</th>
//               <th>Impact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event, index) => (
//               <tr
//                 key={index}
//                 className={`impact-${event.impact}`} 
//               >
//                 <td>{event.date}</td>
//                 <td>{event.time}</td>
//                 <td>{event.currency}</td>
//                 <td>{event.event}</td>
//                 <td>{event.actual || "-"}</td>
//                 <td>{event.forecast || "-"}</td>
//                 <td>{event.previous || "-"}</td>
//                 <td>{event.impact}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Calendar;







// economic evnt with calender

import React, { useEffect, useState, useRef } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const EconomicEvents = () => {
  const widgetRef = useRef(null); // Reference to track script injection

  useEffect(() => {
    if (!widgetRef.current) {
      widgetRef.current = document.createElement("script");
      widgetRef.current.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      widgetRef.current.async = true;
      widgetRef.current.innerHTML = JSON.stringify({
        colorTheme: "light",
        isTransparent: false,
        width: "100%",
        height: "500",
        locale: "en",
        importanceFilter: "-1,0,1", 
        autosize: true,
      });

      document.getElementById("economic-calendar").appendChild(widgetRef.current);
    }
  }, []);

  return (
    <div className="economic-events">
      <h2>Economic Events</h2>
      <div id="economic-calendar"></div>
    </div>
  );
};

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      {/* Left Side: TradingView Economic Events */}
      <div className="event-list">
        <EconomicEvents />
      </div>

      {/* Right Side: Date Calendar */}
      <div className="calendar-sidebar">
        <h2>Date</h2>
        <ReactCalendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default Calendar;



// economic events
// import React, { useEffect } from "react";
// import "./Calendar.css";

// const EconomicEvents = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       colorTheme: "light",
//       isTransparent: false,
//       width: "100%",
//       height: "500",
//       locale: "en",
//       importanceFilter: "-1,0,1", // Show all impact levels
//       autosize: true,
//     });
    
//     document.getElementById("economic-calendar").appendChild(script);
//   }, []);

//   return (
//     <div className="economic-events">
//       <h2>Economic Events</h2>
//       <div id="economic-calendar"></div>
//     </div>
//   );
// };

// const Calendar = () => {
//   return (
//     <div className="calendar-container">
//       {/* Right Side: TradingView Economic Events */}
//       <div className="event-list">
//         <EconomicEvents />
//       </div>
//     </div>
//   );
// };

// export default Calendar;


// import React, { useState, useEffect } from "react";
// import ReactCalendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./Calendar.css";

// const Calendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch(
//           "https://financialmodelingprep.com/api/v4/economic_calendar?apikey=YOUR_API_KEY"
//         );
//         const data = await response.json();

//         // Filter events for the selected date
//         const formattedDate = date.toISOString().split("T")[0];
//         const filteredEvents = data.filter(
//           (event) => event.date.split("T")[0] === formattedDate
//         );

//         setEvents(filteredEvents);
//       } catch (error) {
//         console.error("Error fetching economic events:", error);
//       }
//     };

//     fetchEvents();
//   }, [date]);

//   return (
//     <div className="calendar-container">
//       {/* Left Side: Calendar */}
//       <div className="calendar-sidebar">
//         <ReactCalendar onChange={setDate} value={date} />
//         <div className="navigation">
//           <button onClick={() => setDate(new Date())}>Today</button>
//         </div>
//       </div>

//       {/* Right Side: Economic Events Table */}
//       <div className="event-list">
//         <h2>Economic Events</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Time</th>
//               <th>Currency</th>
//               <th>Event</th>
//               <th>Actual</th>
//               <th>Forecast</th>
//               <th>Previous</th>
//               <th>Impact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.length > 0 ? (
//               events.map((event, index) => (
//                 <tr key={index} className={`impact-${event.impact}`}>
//                   <td>{event.time}</td>
//                   <td>{event.country}</td>
//                   <td>{event.event}</td>
//                   <td>{event.actual || "-"}</td>
//                   <td>{event.forecast || "-"}</td>
//                   <td>{event.previous || "-"}</td>
//                   <td>{event.impact}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7">No events for this date.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Calendar;
