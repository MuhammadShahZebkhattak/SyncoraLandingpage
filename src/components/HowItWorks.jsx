import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Onboarding & Wallet Setup",
      description:
        "Sign up, complete KYC/AML verification, and set up your unified credit wallet.",
    },
    {
      title: "Conversion & Credit Management",
      description:
        "View your Syncora and partner credit balances, then seamlessly convert Syncora coins to the necessary native credits.",
    },
    {
      title: "Service Access",
      description:
        "Use your converted credits to access services such as GPU compute power via Rander or IoT connectivity via Helium—all through our secure payment gateway.",
    },
    {
      title: "Transaction Transparency & Rewards",
      description:
        "All transactions are recorded on the blockchain. Earn rewards and participate in governance through our native tokenomics.",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <button className="explore-process-btn">Explore Our Process</button>
      </div>
    </section>
  );
};

export default HowItWorks;
