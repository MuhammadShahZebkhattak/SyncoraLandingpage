import React, { useEffect, useRef } from "react";

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      const featureCards =
        featuresRef.current.querySelectorAll(".feature-card");
      featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (featuresRef.current) {
        const featureCards =
          featuresRef.current.querySelectorAll(".feature-card");
        featureCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  const features = [
    {
      title: "Unified Credit Wallet",
      description:
        "Manage multiple tokens in one place. Our wallet supports Syncora coins and partner-specific credits (e.g., Helium and Rander credits) while automatically handling conversions so you can focus on what matters.",
    },
    {
      title: "Automated Conversion",
      description:
        "Seamlessly convert Syncora coins into the native credits needed to access various services. No more juggling different wallets—our system does the heavy lifting for you.",
    },
    {
      title: "Secure Payment Gateway",
      description:
        "Experience fast, low-fee, and secure transactions. Our blockchain-powered payment gateway ensures every service request is processed safely and transparently.",
    },
    {
      title: "Developer APIs & SDKs",
      description:
        "Integrate effortlessly with our extensive suite of APIs and SDKs. Designed with developers in mind, our tools simplify the process of connecting your solutions with the Syncora ecosystem.",
    },
    {
      title: "Cross-Chain Interoperability",
      description:
        "Our platform bridges multiple blockchain networks, ensuring smooth asset transfers and enabling a truly decentralized service experience.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="section-title">Features</h2>
        <div ref={featuresRef} className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
