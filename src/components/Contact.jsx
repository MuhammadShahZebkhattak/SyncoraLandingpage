import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title-contact">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Have questions or need support? Reach out to us!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:support@syncora.io">support@syncora.io</a>
            </div>
            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a
                  href="https://twitter.com/syncora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/company/syncora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://discord.gg/syncora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <p className="contact-message">We'd love to hear from you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
