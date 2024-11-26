import React from "react";
import "../assets/styles/HeroSection.css";
import MinalImage from "../assets/images/Minal.jpeg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="social-icons">
        <a href="#instagram">📷</a>
        <a href="#dribbble">🎨</a>
        <a href="#github">💻</a>
      </div>
      <div className="hero-content">
        <h1>John Smith 👋</h1>
        <h2>Visual Designer</h2>
        <p>
          I'm a creative designer based in New York, and I'm very passionate and
          dedicated to my work.
        </p>
        <button className="btn-say-hello">Say Hello</button>
      </div>
      <div className="profile-picture">
        <img src={MinalImage} alt="Minal Chhatre" />
      </div>
    </section>
  );
};

export default HeroSection;
