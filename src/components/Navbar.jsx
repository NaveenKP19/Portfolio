import React from 'react';

const Navbar = ({ activeSection, scrollToSection, navRef }) => {

  // Navbar Order
  const routes = [
    'home',
    'about',
    'skills',
    'projects',
    'education',
    'experience',
    'certificates',
    'contact'
  ];

  // Navbar Labels
  const routeLabels = {
    home: 'HOME',
    about: 'ABOUT',
    skills: 'SKILLS',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    certificates: 'CERTIFICATES',
    contact: 'CONTACT'
  };

  return (

    <>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top navbar-cyber"
      >

        <div className="container-fluid container-xl">

          {/* Logo */}
          <a
            className="navbar-brand cyber-logo"
            href="#home"
            onClick={() => scrollToSection('home')}
          >
            <span className="logo-bracket">[</span>

            <span className="logo-text">
  NAVEEN.PORTFOLIO
</span>

            <span className="logo-bracket">]</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
            ref={navRef}
          >

            <ul className="navbar-nav align-items-lg-center">

              {routes.map((route) => (

                <li className="nav-item" key={route}>

                  <a
                    className={`nav-link nav-link-cyber ${
                      activeSection === route ? 'active' : ''
                    }`}
                    href={`#${route}`}
                    onClick={() => scrollToSection(route)}
                  >

                    {routeLabels[route]}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </nav>

      {/* Internal CSS */}
      <style jsx>{`

      .container-fluid.container-xl {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

        .navbar-cyber {
          background: rgba(10, 10, 20, 0.82);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0, 229, 255, 0.12);
          padding: 10px 0;
          transition: all 0.4s ease;
          box-shadow:
            0 0 15px rgba(0, 229, 255, 0.08);
        }

        /* Logo */
    .cyber-logo {
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-right: auto;
}

        .logo-bracket {
          color: #c026d3;
          animation: blinkGlow 2s infinite;
        }

        .logo-text {
          background: linear-gradient(
            90deg,
            #00e5ff,
            #ffffff,
            #c026d3
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: logoFlow 4s linear infinite;
          background-size: 200% auto;
        }

        /* Navbar Links */
        .navbar-nav {
          gap: 6px;
        }

        .nav-link-cyber {
          position: relative;
          color: #d1d5db !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 10px 16px !important;
          border-radius: 10px;
          transition: all 0.35s ease;
          overflow: hidden;
          font-family: 'Orbitron', sans-serif;
        }

        .nav-link-cyber::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #c026d3
          );
          transform: translateX(-50%);
          transition: width 0.4s ease;
        }

        .nav-link-cyber:hover::before,
        .nav-link-cyber.active::before {
          width: 80%;
        }

        .nav-link-cyber:hover {
          color: #00e5ff !important;
          background: rgba(0, 229, 255, 0.08);
          transform: translateY(-2px);
          text-shadow:
            0 0 10px rgba(0,229,255,0.8);
        }

        .nav-link-cyber.active {
          color: #ffffff !important;
          background: linear-gradient(
            90deg,
            rgba(0,229,255,0.15),
            rgba(192,38,211,0.15)
          );

          box-shadow:
            0 0 12px rgba(0,229,255,0.2);
        }

        /* Mobile */
        .navbar-toggler {
          padding: 6px 10px;
        }

        /* Animations */
        @keyframes blinkGlow {

          0% {
            opacity: 1;
            text-shadow: 0 0 5px #c026d3;
          }

          50% {
            opacity: 0.5;
            text-shadow: 0 0 18px #c026d3;
          }

          100% {
            opacity: 1;
            text-shadow: 0 0 5px #c026d3;
          }

        }

        @keyframes logoFlow {

          0% {
            background-position: 0% center;
          }

          100% {
            background-position: 200% center;
          }

        }

        /* Responsive */
        @media (max-width: 991px) {

          .navbar-cyber {
            padding: 8px 0;
          }

          .navbar-collapse {
            margin-top: 12px;
            padding: 16px;
            border-radius: 18px;
            background: rgba(17, 24, 39, 0.96);
            border: 1px solid rgba(0,229,255,0.1);
          }

          .nav-link-cyber {
            margin-bottom: 10px;
            text-align: center;
          }

        }

      `}</style>

    </>

  );
};

export default Navbar;