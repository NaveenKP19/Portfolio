import React, { useState, useEffect, useRef } from 'react';

// Import your custom CSS file from the src folder
import './index.css';
// Import the new EducationTimeline component
import EducationTimeline from './EducationTimeline';



// The main App component
const App = () => {

  // Carousel effect for projects section
  useEffect(() => {
    const items = document.querySelectorAll('.carousel-item-cyber');
    let index = 0;

    const updateCarousel = () => {
      items.forEach((item) => {
        item.classList.remove('left', 'active', 'right');
      });

      const leftIndex = (index + 2) % items.length;
      const activeIndex = index;
      const rightIndex = (index + 1) % items.length;

      items[leftIndex].classList.add('left');
      items[activeIndex].classList.add('active');
      items[rightIndex].classList.add('right');

      index = (index + 1) % items.length;
    };

    updateCarousel(); // Initial state
    const interval = setInterval(updateCarousel, 5000);
    return () => clearInterval(interval);
  }, []);

  // State for active navigation section and ref for navbar collapse
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null); // Ref for the navbar collapse element

  // Smooth scrolling for navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    // Close navbar on mobile after clicking a link (Bootstrap's collapse)
    // Ensure Bootstrap's JS is loaded before this runs
    // window.bootstrap is available because we load bootstrap.bundle.min.js in index.html
    if (window.bootstrap && navRef.current && navRef.current.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  // Effect to handle scroll-based active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link-cyber');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust as needed, 0.5 means 50% of section in view
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

 // Project data for the Bootstrap carousel
  const projects = [
    {
      id: 1,
      title: "TASKORA",
      description: "A full-stack task management system built with Angular and Spring Boot. Includes user authentication, Twilio-based SMS reminders, personalized dashboards, and CRUD operations with MySQL.",
      image: "/assets/taskora.png",
      tech: ["Angular", "Spring Boot", "MySQL", "Twilio"]
    },
    {
      id: 2,
      title: "CLIMEX",
      description: "A responsive weather application using HTML, CSS & JavaScript. Features live weather data, animated icons, dynamic backgrounds, geolocation, and 6-day forecast using public APIs.",
      image: "/assets/climax.png",
      tech: ["JavaScript", "HTML5", "CSS3", "API"]
    },
    {
      id: 3,
      title: "SOCIAL POST APP",
      description: "A single-page social media post manager built with Angular. Supports post creation, filtering by platform, editing, deleting, and live timestamp tracking using arrays and custom styling.",
      image: "/assets/social.png",
      tech: ["Angular", "TypeScript", "Responsive UI"]
    }
  ];

  // Set current year in footer
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio-container"> {/* A wrapper div for the entire content */}
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-cyber py-4">
        <div className="container-fluid container-xl">
          <a className="navbar-brand text-3xl font-bold text-cyan-400 font-orbitron animate-glitch-text" href="#home" onClick={() => scrollToSection('home')}>[PORTFOLIO]</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav" ref={navRef}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'home' ? 'active' : ''}`} aria-current="page" href="#home" onClick={() => scrollToSection('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => scrollToSection('about')}>About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'skills' ? 'active' : ''}`} href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'certificates' ? 'active' : ''}`} href="#certificates" onClick={() => scrollToSection('certificates')}>Certs</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link nav-link-cyber ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-elements">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container position-relative z-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white mb-4 font-orbitron animate-glitch-text">
            WELCOME:<br /> <span className="text-gradient-cyan-fuchsia">[NAVEEN PATHAK]</span>
          </h1>
          <p className="fs-4 text-gray-300 mb-5 mx-auto font-mono tracking-wide" style={{ maxWidth: '48rem' }}>
            &gt; <span className="fw-bold text-cyan-300">[SOFTWARE DEVELOPER]</span>
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#projects" className="btn btn-cyber" onClick={() => scrollToSection('projects')}>
              PROJECTS <i className="fas fa-desktop ms-2"></i>
            </a>
              <a href="#certificates" className="btn btn-cyber" onClick={() => scrollToSection('certificates')}>
              CERTIFICATES <i className="fas fa-envelope ms-2"></i>
            </a>
            <a href="#contact" className="btn btn-cyber" onClick={() => scrollToSection('contact')}>
              CONTACT <i className="fas fa-envelope ms-2"></i>
            </a>
          </div>
          <div className="mt-5 d-flex justify-content-center gap-4">
            <a href="https://github.com/NaveenKP19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover-text-cyan-300 transition-colors duration-200">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/naveen-pathak-37511b291/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover-text-fuchsia-300 transition-colors duration-200">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <h2 className="section-title-cyber">ABOUT_ME</h2>
        <div className="row align-items-center g-5">
          <div className="col-md-6">
           <div className="text-lg text-gray-300 leading-relaxed space-y-4 font-mono border-start border-4 border-cyan-500 ps-4 py-2">
              <p>
                &gt; HELLO. I AM <span className="fw-bold text-cyan-300">NAVEEN PATHAK</span>, A DEDICATED <span className="fw-bold text-fuchsia-300">FULL-STACK DEVELOPER</span> WITH A CORE DIRECTIVE TO ENGINEER ROBUST AND INTUITIVE DIGITAL INFRASTRUCTURES. MY JOURNEY COMMENCED DURING MY B.TECH IN COMPUTER SCIENCE (2024), WHERE I BUILT SYSTEMS FROM THE GROUND UP TO SOLVE REAL-WORLD PROBLEMS.
              </p>
              <p>
                &gt; MY EXPERTISE SPANS <span className="text-fuchsia-300">SPRING BOOT, ANGULAR, TYPESCRIPT, JAVASCRIPT, MYSQL, HTML/CSS</span>, AND CLOUD-INTEGRATED SYSTEM DESIGN. I’VE BUILT SCALABLE APPLICATIONS LIKE TASKORA, CLIMEX, AND BUDDY IN THE JUNGLE — DEMONSTRATING FLUENCY IN FULL-STACK PROTOCOLS, AUTHENTICATION FLOWS, SCHEDULING ALGORITHMS, AND DATA MANAGEMENT.
              </p>
              <p>
                &gt; BEYOND THE TERMINAL, MY RECREATIONAL ACTIVITIES INCLUDE <span className="text-fuchsia-300">EXPERIMENTING WITH MODERN UI/UX DESIGN, BUILDING SIDE PROJECTS, CRAFTING TECHNICAL CONTENT, AND LEARNING ADVANCED FRAMEWORKS</span>. I CONSTANTLY SEEK OUT NEW CHALLENGES, EMERGING TRENDS, AND MEANINGFUL COLLABORATIONS THAT PUSH THE BOUNDARIES OF TECHNOLOGY.
              </p>
            </div>

          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="profile-img-container">
              <img src="/assets/Naveen1.jpg" alt="Your Profile" className="img-fluid" />
              <div className="profile-img-overlay"></div>
              <div className="profile-img-dashed-border"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
<section id="projects" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '1 s' }}>
  <h2 className="section-title-cyber">PROJECT'S</h2>

  {/* Bootstrap Carousel for Projects */}
  <div id="projectBootstrapCarousel" className="carousel slide custom-project-carousel" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {projects.map((_, index) => (
        <button key={index} type="button" data-bs-target="#projectBootstrapCarousel" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : 'false'} 
        
        aria-label={`Slide ${index + 1}`}></button>
      ))}
    </div>
    <div className="carousel-inner">
      {projects.map((project, index) => (
        <div key={project.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div className="card-cyber project-carousel-card text-center">
            {/* Using a placeholder image for demonstration */}
            <img src={project.image} className="d-block w-100 img-fluid mb-3" alt={project.title} />
            <div className="carousel-caption-cyber d-none d-md-block"> {/* Show captions on medium and larger screens */}
              <h3 className="text-cyan-300 font-orbitron mb-2">{project.title}</h3>
              <p className="text-gray-400 font-mono text-sm">
                &gt; {project.description}
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="badge bg-dark text-cyan-300 border border-cyan-600 px-2 py-1 rounded-pill font-mono">{tech}</span>
                ))}
              </div>
            </div>
            {/* For mobile, display content directly within the card, not in caption */}
            <div className="d-md-none mt-3">
              <h3 className="text-cyan-300 font-orbitron mb-2">{project.title}</h3>
              <p className="text-gray-400 font-mono text-sm">
                &gt; {project.description}
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="badge bg-dark text-cyan-300 border border-cyan-600 px-2 py-1 rounded-pill font-mono">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#projectBootstrapCarousel" // Ensure this matches the carousel's ID
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#projectBootstrapCarousel" // Ensure this matches the carousel's ID
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

</section>


       {/* Skills Section */}
       <section id="skills" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '1s' }}>
   <h2 className="section-title-cyber">SKILL_MATRIX</h2>
   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
    
    {/* Languages */}
 <div className="col">
       <div className="card-cyber text-center d-flex flex-column align-items-center">
         <i className="fas fa-microchip fa-3x text-cyan-400 mb-3 animate-bounce-slow"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-cyan-200">LANGUAGES</h3>
          <p className="text-gray-400 text-sm font-mono">Java, JavaScript, TypeScript, HTML/HTML5, CSS/CSS3</p>
        </div>
      </div>

      {/* Frontend */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-desktop fa-3x text-fuchsia-400 mb-3 animate-bounce-slow delay-100"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-fuchsia-200">FRONTEND</h3>
          <p className="text-gray-400 text-sm font-mono">Angular, React</p>
        </div>
      </div>

      {/* Backend */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-layer-group fa-3x text-green-400 mb-3 animate-bounce-slow delay-200"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-green-200">BACKEND</h3>
          <p className="text-gray-400 text-sm font-mono">Java</p>
        </div>
      </div>

      {/* Databases */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-database fa-3x text-yellow-400 mb-3 animate-bounce-slow delay-300"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-yellow-200">DATABASES</h3>
          <p className="text-gray-400 text-sm font-mono">MySQL, PostgreSQL</p>
        </div>
      </div>

      {/* App Development */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-mobile-alt fa-3x text-cyan-400 mb-3 animate-bounce-slow delay-300"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-cyan-200">APP DEVELOPMENT</h3>
          <p className="text-gray-400 text-sm font-mono">React Native, Expo</p>
        </div>
      </div>

      {/* Version Control */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-code-branch fa-3x text-purple-400 mb-3 animate-bounce-slow delay-600"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-purple-200">VERSION_CONTROL</h3>
          <p className="text-gray-400 text-sm font-mono">Git, GitHub</p>
        </div>
      </div>

      {/* API & Tools */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-plug fa-3x text-orange-400 mb-3 animate-bounce-slow delay-500"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-orange-200">API & TOOLS</h3>
          <p className="text-gray-400 text-sm font-mono">Postman, REST API, Swagger, Twilio</p>
        </div>
      </div>

      {/* IDEs & Utilities */}
      <div className="col">
        <div className="card-cyber text-center d-flex flex-column align-items-center">
          <i className="fas fa-tools fa-3x text-teal-400 mb-3 animate-bounce-slow delay-700"></i>
          <h3 className="fs-4 fw-bold mb-2 font-orbitron text-teal-200">IDEs & UTILITIES</h3>
          <p className="text-gray-400 text-sm font-mono">IntelliJ IDEA, Eclipse, Logger Tools</p>
        </div>
      </div>

    </div>
  </section>


        {/* Projects Section */}
  <section id="projects" className="py-5 py-md-5 pb-[150px] container container-xl animate-slide-up" style={{ animationDelay: '1.2s' ,minHeight: 'calc(100% + 150px)'}}>
    <h2 className="section-title-cyber">PROJECT'S</h2>

    <div className="project-carousel">
      <div className="carousel-3d-wrapper">
        <div className="carousel-3d" id="projectCarousel">

          {/* TASKORA */}
          <div className="carousel-item-cyber">
            <div className="card-cyber text-center">
              <img src="/assets/taskora.png" className="img-fluid mb-3" alt="Taskora Project" />
              <h5 className="text-cyan-300 font-orbitron mb-2">TASKORA</h5>
              <p className="text-gray-400 font-mono text-[5px]">
                &gt; A full-stack task management system built with Angular and Spring Boot. Includes user authentication, Twilio-based SMS reminders, personalized dashboards, and CRUD operations with MySQL.
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                <span className="badge bg-dark text-cyan-300 border border-cyan-600 px-2 py-1 rounded-pill font-mono">Angular</span>
                <span className="badge bg-dark text-fuchsia-300 border border-fuchsia-600 px-2 py-1 rounded-pill font-mono">Spring Boot</span>
                <span className="badge bg-dark text-green-300 border border-green-600 px-2 py-1 rounded-pill font-mono">MySQL</span>
                <span className="badge bg-dark text-yellow-300 border border-yellow-600 px-2 py-1 rounded-pill font-mono">Twilio</span>
              </div>
            </div>
          </div>

          {/* CLIMEX */}
          <div className="carousel-item-cyber">
            <div className="card-cyber text-center">
              <img src="/assets/climax.png" className="img-fluid mb-3" alt="ClimeX Weather App" />
              <h3 className="text-cyan-300 font-orbitron mb-2">CLIMEX</h3>
              <p className="text-gray-400 font-mono text-[10px]">
                &gt; A responsive weather application using HTML, CSS & JavaScript. Features live weather data, animated icons, dynamic backgrounds, geolocation, and 6-day forecast using public APIs.
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                <span className="badge bg-dark text-blue-300 border border-blue-600 px-2 py-1 rounded-pill font-mono">JavaScript</span>
                <span className="badge bg-dark text-pink-300 border border-pink-600 px-2 py-1 rounded-pill font-mono">HTML5</span>
                <span className="badge bg-dark text-purple-300 border border-purple-600 px-2 py-1 rounded-pill font-mono">CSS3</span>
                <span className="badge bg-dark text-teal-300 border border-teal-600 px-2 py-1 rounded-pill font-mono">API</span>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA POST APP */}
          <div className="carousel-item-cyber">
            <div className="card-cyber text-center">
              <img src="/assets/social.png" className="img-fluid mb-3" alt="Social Media Post Manager" />
              <h3 className="text-cyan-300 font-orbitron mb-2">SOCIAL POST APP</h3>
              <p className="text-gray-400 font-mono text-[10px]">
                &gt; A single-page social media post manager built with Angular. Supports post creation, filtering by platform, editing, deleting, and live timestamp tracking using arrays and custom styling.
              </p>
              <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                <span className="badge bg-dark text-cyan-300 border border-cyan-600 px-2 py-1 rounded-pill font-mono">Angular</span>
                <span className="badge bg-dark text-lime-300 border border-lime-600 px-2 py-1 rounded-pill font-mono">TypeScript</span>
                <span className="badge bg-dark text-orange-300 border border-orange-600 px-2 py-1 rounded-pill font-mono">Responsive UI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


        {/* Certificates Section */}
        <section id="certificates" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '1.4s' }}>
          <div id="carouselExampleCaptions" className="carousel slide custom-carousel">
          <h2 className="section-title-cyber">ACCREDITATIONS</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            <div className="col">
              <div className="card-cyber text-center">
                <i className="fas fa-award fa-3x text-yellow-400 mb-3 mx-auto animate-pulse-slow"></i>
                <h3 className="fs-4 fw-bold text-cyan-300 mb-2 font-orbitron">ADVANCED_CYBER_SECURITY</h3>
                <p className="text-gray-400 mb-1 text-sm font-mono">ISSUER: CYBER_ACADEMY</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">DATE: 2024_03_15</p>
                <a href="https: www.credly.com/badges/your-cyber-badge-id" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover-text-white d-flex align-items-center justify-content-center font-mono text-decoration-none">
                  <i className="fas fa-external-link-alt me-2"></i> VERIFY_CREDENTIAL
                </a>
              </div>
            </div>

            <div className="col">
              <div className="card-cyber text-center">
                <i className="fas fa-code fa-3x text-teal-400 mb-3 mx-auto animate-pulse-slow delay-100"></i>
                <h3 className="fs-4 fw-bold text-cyan-300 mb-2 font-orbitron">DEEP_LEARNING_SPECIALIST</h3>
                <p className="text-gray-400 mb-1 text-sm font-mono">ISSUER: AI_INSTITUTE</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">DATE: 2023_11_20</p>
                <a href="https: www.credly.com/badges/your-ai-badge-id" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover-text-white d-flex align-items-center justify-content-center font-mono text-decoration-none">
                  <i className="fas fa-external-link-alt me-2"></i> VERIFY_CREDENTIAL
                </a>
              </div>
            </div>

            <div className="col">
              <div className="card-cyber text-center">
                <i className="fas fa-terminal fa-3x text-blue-400 mb-3 mx-auto animate-pulse-slow delay-200"></i>
                <h3 className="fs-4 fw-bold text-cyan-300 mb-2 font-orbitron">QUANTUM_COMPUTING_FUNDAMENTALS</h3>
                <p className="text-gray-400 mb-1 text-sm font-mono">ISSUER: QUANTUM_LABS</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">DATE: 2025_01_05</p>
                <a href="https: www.credly.com/badges/your-quantum-badge-id" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover-text-white d-flex align-items-center justify-content-center font-mono text-decoration-none">
                  <i className="fas fa-external-link-alt me-2"></i> VERIFY_CREDENTIAL
                </a>
              </div>
            </div>
          </div></div>
        </section>

        {/* Education section - Now using the dedicated component */}
        <EducationTimeline />
    

      {/* Contact Section */}
<section id="contact" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '1.6s' }}>
  <h2 className="section-title-cyber">CONTACT</h2>
  <div className="row align-items-start g-5">
    <div className="col-md-6">
      <div className="space-y-4 text-gray-300 font-mono border-start border-4 border-fuchsia-500 ps-4 py-2">
        <p className="fs-5">
          Great things begin with a simple hello. Let’s connect and create something meaningful.
        </p>
        <div className="d-flex align-items-center gap-3">
          <a href="mailto:naveenkumarpathak9@gmail.com" className="text-white text-decoration-none hover-text-white transition-colors duration-200">
            <i className="fas fa-envelope fa-lg text-cyan-400"></i> naveenkumarpathak9@gmail.com
          </a>
        </div>
        <div className="d-flex align-items-center gap-3">
          <i className="fas fa-phone fa-lg text-fuchsia-400"></i>
          <span>+91 9765353916</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="https://www.linkedin.com/in/naveen-pathak-37511b291/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-text-white transition-colors duration-200">
            <i className="fab fa-linkedin fa-lg text-blue-400"></i> naveen-pathak-37511b291
          </a>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="https://github.com/NaveenKP19" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none hover-text-white transition-colors duration-200">
            <i className="fab fa-github fa-lg text-gray-400"></i> NaveenKP19
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card-cyber p-5">
<form name="contact" method="POST" data-netlify="true" action="/success.html">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label htmlFor="name" className="form-label text-cyan-300 text-sm fw-bold mb-2 font-orbitron">NAME_INPUT</label>
            <div className="input-group-cyber">
              <input type="text" id="name" name="name" className="form-control input-field-cyber" placeholder="YOUR_IDENTIFIER" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-cyan-300 text-sm fw-bold mb-2 font-orbitron">EMAIL_ADDRESS</label>
            <div className="input-group-cyber">
              <input type="email" id="email" name="email" className="form-control input-field-cyber" placeholder="YOUR_EMAIL@DOMAIN.COM" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="form-label text-cyan-300 text-sm fw-bold mb-2 font-orbitron">SUBJECT_LINE</label>
            <div className="input-group-cyber">
              <input type="text" id="subject" name="subject" className="form-control input-field-cyber" placeholder="PURPOSE_OF_TRANSMISSION" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label text-cyan-300 text-sm fw-bold mb-2 font-orbitron">MESSAGE_BODY</label>
            <div className="input-group-cyber">
              <textarea id="message" name="message" rows="7" className="form-control input-field-cyber resize-vertical" placeholder="ENTER_YOUR_MESSAGE_DATA_HERE..."></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-cyber w-100 d-flex align-items-center justify-content-center">
            TRANSMIT_DATA <i className="fas fa-paper-plane ms-2"></i>
          </button>
        </form>

        <div id="success-message" style="display:none;" class="text-center mt-4">
        <p class="fs-4 text-success font-orbitron">Form Submitted Successfully! ✅</p>
        <p class="text-gray-400">Thank you for your message. We'll be in touch soon.</p>
      </div>
      </div>
    </div>
  </div>

  
</section>

      {/* Footer */}
<footer className="py-4 text-center text-gray-600 text-sm border-top border-gray-800 mt-5">
  <p>&copy; {currentYear} NAVEEN PATHAK. All rights reserved.</p>
  <p className="mt-2">Crafted with <i className="fas fa-heart text-danger"></i> & clean code.</p>
</footer>

    </div>
  );
};

export default App;