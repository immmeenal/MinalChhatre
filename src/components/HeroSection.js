import React, { useState } from "react"; // <-- Import useState here
import "../assets/styles/HeroSection.css";
import MinalImage from "../assets/images/Minal.jpeg";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import direct from "../assets/images/direct.png";

const HeroSection = () => {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the "Copy" button
  const handleCopy = () => {
    // Use the Clipboard API to copy the email
    navigator.clipboard.writeText("minalchhatre10@gmail.com").then(() => {
      // Close the popup after copying the email
      setShowPopup(false);
      alert("Email copied to clipboard!");
    });
  };

  return (
    <section className="hero">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/minal-chhatre-4451201b6/">
          <img src={linkedin} alt="linkedin Icon" className="social-icon" />
        </a>
        <a href="https://github.com/immmeenal">
          <img src={github} alt="github Icon" className="social-icon" />
        </a>
        {/* Trigger the popup when the Gmail icon is clicked */}
        <a onClick={() => setShowPopup(true)}>
          <img src={gmail} alt="gmail Icon" className="social-icon" />
        </a>
      </div>
      <div className="hero-content">
        <h1>Minal Chhatre 👋</h1>
        <h2>Software Developer</h2>

        <p style={{ fontSize: "17px" }}>
          I am pursuing a B.Tech in Information Technology at Cummins College of
          Engineering, Pune. Earlier, I completed a Diploma in Computer
          Engineering from Government Polytechnic, Pune.
        </p>
        <p style={{ fontSize: "17px" }}>
          I interned at Providence India as a Cloud Software Engineer Intern
          (Jun. 2024 – Aug. 2024), where I reduced 40 vulnerable packages by
          90.91% across 9 microservices, implemented a version control system
          using Liquibase, and developed a POST API for dynamic key-value
          management in microservices.
        </p>
        <p style={{ fontSize: "17px" }}>
          In 2024, I was among the top 200 nationwide in Flipkart - Girls Wanna
          Code 5.0, and in 2023, I was a national finalist in the All India
          Women Hackathon’23. I also volunteer as a teaching assistant at Bhumi
          NGO India, helping children with mathematics.
        </p>
        <button className="btn-say-hello">
          Say Hello
          <img src={direct} alt="Hello Icon" className="button-icon" />
        </button>
      </div>
      <div className="profile-picture">
        <img src={MinalImage} alt="Minal Chhatre" />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Email: minalchhatre10@gmail.com</p>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
