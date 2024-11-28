import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../assets/styles/Home.css";
import Footer from "../components/Footer";
import About from "../components/About";

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Sections */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
