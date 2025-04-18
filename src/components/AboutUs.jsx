import React, { useEffect, useRef } from "react";

const AboutUs = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const missionItemsRef = useRef([]);

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

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    // Observe mission list items
    missionItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);

      // Unobserve mission list items
      missionItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>

        <div ref={visionRef} className="vision-section">
          <h3 className="section-subtitle">Our Vision</h3>
          <p className="section-description">
            At Syncora, we envision a world where the fragmented landscape of
            decentralized infrastructure is transformed into a unified,
            user-friendly ecosystem. Our goal is to simplify access to diverse
            services, drive interoperability, and empower communities with
            secure, scalable technology.
          </p>
        </div>

        <div ref={missionRef} className="mission-section">
          <h3 className="section-subtitle">Our Mission</h3>
          <ul className="mission-list">
            <li ref={(el) => (missionItemsRef.current[0] = el)}>
              Integrate: Seamlessly combine multiple DePIN services into one
              platform.
            </li>
            <li ref={(el) => (missionItemsRef.current[1] = el)}>
              Simplify: Streamline complex transactions with a unified credit
              wallet and automated conversion processes.
            </li>
            <li ref={(el) => (missionItemsRef.current[2] = el)}>
              Empower: Reward users and developers through innovative tokenomics
              and decentralized governance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
