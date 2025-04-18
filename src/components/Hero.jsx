import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="payment-gateway-animation" />
      <div className="ethereum-elements">
        <div className="ethereum-element">Ξ</div>
        <div className="ethereum-element">Ξ</div>
        <div className="ethereum-element">Ξ</div>
        <div className="ethereum-element">Ξ</div>
      </div>
      <div className="hero-container">
        <h1 className="hero-title">Welcome to Syncora</h1>
        <h2 className="hero-subtitle">
          Unifying the Future of Decentralized Infrastructure
        </h2>
        <p className="hero-description">
          Syncora is a revolutionary platform that brings together multiple
          decentralized physical infrastructure networks (DePIN) under one
          seamless ecosystem. With our integrated payment gateway and unified
          credit wallet, you can effortlessly manage, convert, and utilize
          various native credits—from Helium for IoT connectivity to Rander for
          GPU-powered services—all with a single token: the Syncora coin.
        </p>
        <div className="hero-buttons">
          <button className="hero-cta">
            <span className="cta-text">Get Started</span>
            <span className="cta-arrow">→</span>
          </button>
          <button className="hero-cta secondary">
            <span className="cta-text">Learn More</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="background-grid"></div>
        <div className="background-particles"></div>
      </div>
    </section>
  );
};

export default Hero;
