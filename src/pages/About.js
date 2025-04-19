import React from "react";
import "./About.css";
import Footer from "../components/Footer"; 

const About = () => {
  // Team members data
  const teamMembers = [
    { name: "Shiva K", role: "Development and Support" },
    { name: "Balaji S", role: " Product Support" },
    { name: "Iswar Raj", role: "Forex Analyst" },
  ];

  return (
    <>
      <div className="about-background">
        <div className="about-container">
          <h1>About Alphabet Forex</h1>
          <p>
            Alphabet Forex is a cutting-edge platform designed to make forex trading
            accessible and efficient for everyone. With real-time data, secure
            transactions, and powerful tools, we help you make informed decisions in
            the forex market.
          </p>
          <h2>Our Mission</h2>
          <p>
            To empower traders of all levels with the knowledge and resources needed to
            succeed in the global forex market.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Real-time market updates</li>
            <li>Intuitive trading interface</li>
            <li>24/5 customer support</li>
            <li>Comprehensive educational resources</li>
          </ul>

          <h2>Meet the Team</h2>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
