import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../assets/styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Home;
