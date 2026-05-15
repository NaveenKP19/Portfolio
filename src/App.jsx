import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Importing Custom Serial Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCarousel from './components/ProjectCarousel'; // Replaces the messy code
import ProjectsSection from './components/ProjectsSection'; // Additional portfolio work
import SkillMatrix from './components/SkillMatrix';
import EducationTimeline from './EducationTimeline';
import Contact from './components/Contact';
import CertificatesSection from './components/Certificates1';

const App = () => {
  // const [activeSection, setActiveSection] = useState('home');
  const [activeSection] = useState('home');

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // Unified Scroll Management Protocol
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     setActiveSection(id);
  //   }
  //   if (window.bootstrap && navRef.current && navRef.current.classList.contains('show')) {
  //     const bsCollapse = new window.bootstrap.Collapse(navRef.current, { toggle: false });
  //     bsCollapse.hide();
  //   }
  // };

  const scrollToSection = (sectionId) => {

  // Auto switch timeline tabs
  if (sectionId === "experience") {
    window.dispatchEvent(new CustomEvent("switchTimelineTab", {
      detail: "experience"
    }));
  }

  if (sectionId === "education") {
    window.dispatchEvent(new CustomEvent("switchTimelineTab", {
      detail: "education"
    }));
  }

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
};

  // IntersectionObserver highlight engine
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link-cyber');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.4 };

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

    sections.forEach(section => sectionObserver.observe(section));
    return () => sections.forEach(section => sectionObserver.unobserve(section));
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, { method: 'POST', body: formData });
      if (response.ok) {
        setShowSuccessPopup(true);
        form.reset(); // Auto-flush inputs on success
      } else {
        alert('Transmission error. Try again.');
      }
    } catch (error) {
      alert('Network exception intercepted: ' + error);
    }
  };

  return (
    <div className="portfolio-container">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} navRef={navRef} />
      
      <Hero scrollToSection={scrollToSection} />
      
      <About />

      <SkillMatrix />
      
      <ProjectsSection />
            
      <EducationTimeline />

      <CertificatesSection/>
      
      <Contact handleFormSubmit={handleFormSubmit} />

      {/* Global Transmission Modal */}
      {showSuccessPopup && (
        <div className="modal-overlay">
          <div className="card-cyber modal-content-cyber p-5 text-center">
            <h3 className="section-title-cyber text-success">SUCCESS!</h3>
            <p className="fs-5 text-gray-300 font-mono mt-3">
              Your message packet has run successfully. I'll patch in shortly.
            </p>
            <button className="btn btn-cyber mt-4" onClick={() => setShowSuccessPopup(false)}>
              ACKNOWLEDGE <i className="fas fa-check ms-2"></i>
            </button>
          </div>
        </div>
      )}
      
      <footer className="py-4 text-center text-gray-600 text-sm border-top border-gray-800 mt-5">
        <p>&copy; {currentYear} NAVEEN PATHAK. System operational.</p>
        <p className="mt-2">Built using React and Clean Architecture parameters.</p>
      </footer>
    </div>
  );
};

export default App;