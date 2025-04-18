import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "features",
        "how-it-works",
        "tokenomics",
        "roadmap",
        "community",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-left">
          <Logo />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={activeSection === "features" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                Features
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className={`dropdown-toggle ${isDropdownOpen ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                More ▼
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <a
                    href="#how-it-works"
                    className={activeSection === "how-it-works" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("how-it-works");
                    }}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    className={activeSection === "tokenomics" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("tokenomics");
                    }}
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className={activeSection === "roadmap" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("roadmap");
                    }}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className={activeSection === "community" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("community");
                    }}
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <button className="get-started-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
