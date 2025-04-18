import React from "react";

const Community = () => {
  return (
    <section id="community" className="community">
      <div className="community-container">
        <h2 className="section-title-community">Community</h2>
        <div className="community-content">
          <p className="community-description">
            Join our growing global community of innovators, developers, and
            enthusiasts who are shaping the future of decentralized
            infrastructure. Connect with us on social media, participate in
            governance votes, and stay updated with the latest project news.
          </p>
          <div className="community-buttons">
            <button className="community-cta">Join Our Community</button>
            <button className="community-cta secondary">
              Follow Us on Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
