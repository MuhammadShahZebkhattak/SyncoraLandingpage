import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Community from "./Community";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <HowItWorks />
        <Tokenomics />
        <Roadmap />
        <Community />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
