
import React from 'react';

const Hero = ({ scrollToSection }) => {

  const techStack = [
    "JAVA",
    "SPRING BOOT",
    "ANGULAR",
    "MYSQL",
    "HIBERNATE",
    "TYPESCRIPT"
  ];

  return (

   <section
  id="home"
  className="hero-section position-relative overflow-hidden d-flex align-items-center"
  style={{
    minHeight: "90vh",
    paddingTop: "120px",
    paddingBottom: "40px"
  }}
>

      {/* Background Effects */}
      <div className="hero-bg-elements">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className="container position-relative z-1 text-center animate-fade-in"
        style={{ animationDelay: '0.5s' }}
      >

        {/* Terminal Intro */}
        <div className="mb-3">
          <p className="text-uppercase text-cyan-300 fw-semibold tracking-widest font-mono mb-2">
            &gt; SYSTEM BOOTING...
          </p>

          <p className="text-success font-mono small">
            ● STATUS : AVAILABLE_FOR_HIRING
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title text-white mb-4 font-orbitron animate-glitch-text">

          WELCOME:
          <br />

          <span className="text-gradient-cyan-fuchsia">
            [NAVEEN PATHAK]
          </span>

        </h1>

        {/* Role */}
        <div className="mb-4">

          <p
            className="fs-3 text-gray-300 mx-auto font-mono tracking-wide"
            style={{ maxWidth: '60rem' }}
          >

            &gt;
            <span className="fw-bold text-cyan-300 ms-2">
              JAVA FULL-STACK DEVELOPER
            </span>

          </p>

          <p className="text-gray-400 fs-5 mt-3 mx-auto hero-description">

            Building scalable web applications using
            Spring Boot, Angular, REST APIs, and MySQL
            with a focus on clean architecture and
            responsive user experiences.

          </p>

        </div>

        {/* Tech Stack */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">

          {techStack.map((tech, index) => (

            <span
              key={index}
              style={{
                padding: "12px 22px",
                borderRadius: "50px",
                border: "2px solid #00ffff",
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(138,43,226,0.18))",
                color: "#00ffff",
                fontWeight: "700",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: "'Orbitron', sans-serif",
                boxShadow:
                  "0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(138,43,226,0.3)",
                transition: "0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px) scale(1.05)";
                e.target.style.boxShadow =
                  "0 0 20px rgba(0,255,255,0.9), 0 0 35px rgba(138,43,226,0.6)";
                e.target.style.background =
                  "linear-gradient(135deg, rgba(0,255,255,0.25), rgba(138,43,226,0.35))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0px) scale(1)";
                e.target.style.boxShadow =
                  "0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(138,43,226,0.3)";
                e.target.style.background =
                  "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(138,43,226,0.18))";
              }}
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">

          <a
            href="#projects"
            className="btn btn-cyber"
            onClick={() => scrollToSection('projects')}
          >
            PROJECTS
            <i className="fas fa-code ms-2"></i>
          </a>

          <a
            href="#skills"
            className="btn btn-cyber"
            onClick={() => scrollToSection('skills')}
          >
            SKILLS
            <i className="fas fa-laptop-code ms-2"></i>
          </a>

          <a
            href="#contact"
            className="btn btn-cyber"
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
            <i className="fas fa-envelope ms-2"></i>
          </a>

          <a
            href="/resume.pdf"
            download="Naveen_Pathak_Resume.pdf"
            className="btn btn-cyber border border-fuchsia-500 text-fuchsia-300"
          >
            DOWNLOAD CV
            <i className="fas fa-download ms-2"></i>
          </a>

        </div>

        {/* Stats */}
        <div className="row justify-content-center g-4 mb-5">

          <div className="col-6 col-md-3">
            <div className="hero-stat-card">

              <h3>5+</h3>
              <p>PROJECTS</p>

            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="hero-stat-card">

              <h3>DSA</h3>
              <p>PROBLEM SOLVING</p>

            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="hero-stat-card">

              <h3>2024</h3>
              <p>B.TECH CSE</p>

            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4">

          <a
            href="https://github.com/NaveenKP19"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/naveen-pathak-37511b291/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          <a
            href="mailto:naveenkumarpathak9@gmail.com"
            className="social-icon"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;