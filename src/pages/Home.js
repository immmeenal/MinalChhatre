import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../assets/styles/Home.css";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="home">
      <Header />

      {/* Sections */}
      <section id="home" smooth={true} duration={500}>
        <HeroSection />
      </section>
      <section id="Education" smooth={true} duration={500}>
        <Education />
      </section>
      <section id="Experience" smooth={true} duration={500}>
        <Experience />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
