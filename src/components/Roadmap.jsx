import React from "react";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: Concept & Planning",
      items: [
        "Finalize technical and business requirements.",
        "Establish strategic partnerships with key DePIN projects.",
      ],
    },
    {
      title: "Phase 2: MVP Development",
      items: [
        "Launch the unified credit wallet and core conversion system.",
        "Integrate initial services (e.g., Helium and Rander).",
      ],
    },
    {
      title: "Phase 3: Beta Launch & Feedback",
      items: [
        "Open beta testing to select users and developers.",
        "Iterate on features based on community feedback and rigorous security audits.",
      ],
    },
    {
      title: "Phase 4: Full Platform Rollout",
      items: [
        "Expand service integrations and cross-chain capabilities.",
        "Scale globally with enhanced analytics, governance, and community support.",
      ],
    },
    {
      title: "Phase 5: Continuous Innovation",
      items: [
        "Regularly update the platform with new services, improved user experience, and further decentralized applications.",
      ],
    },
  ];

  return (
    <section id="roadmap" className="roadmap">
      <div className="roadmap-container">
        <h2 className="section-title">Roadmap</h2>
        <div className="phases-container">
          {phases.map((phase, index) => (
            <div className="phase-card" key={index}>
              <h3 className="phase-title">{phase.title}</h3>
              <ul className="phase-items">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="view-roadmap-btn">View Detailed Roadmap</button>
      </div>
    </section>
  );
};

export default Roadmap;
