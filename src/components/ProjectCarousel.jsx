import React, { useEffect } from 'react';

const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "TASKORA",
      description: "A full-stack task management system built with Angular and Spring Boot. Includes user authentication, Twilio-based SMS reminders, personalized dashboards, and CRUD operations with MySQL.",
      image: "/assets/taskora.png",
      tech: ["Angular", "Spring Boot", "MySQL", "Twilio"],
      github: "https://github.com/NaveenKP19",
      live: "#"
    },
    {
      id: 2,
      title: "CLIMEX",
      description: "A responsive weather application using HTML, CSS & JavaScript. Features live weather data, animated icons, dynamic backgrounds, geolocation, and 6-day forecast using public APIs.",
      image: "/assets/climax.png",
      tech: ["JavaScript", "HTML5", "CSS3", "API"],
      github: "https://github.com/NaveenKP19",
      live: "#"
    },
    {
      id: 3,
      title: "SOCIAL POST APP",
      description: "A single-page social media post manager built with Angular. Supports post creation, filtering by platform, editing, deleting, and live timestamp tracking using arrays and custom styling.",
      image: "/assets/social.png",
      tech: ["Angular", "TypeScript", "Responsive UI"],
      github: "https://github.com/NaveenKP19",
      live: "#"
    }
  ];

  useEffect(() => {
    const items = document.querySelectorAll('.carousel-item-cyber');
    let index = 0;
    if (items.length === 0) return;

    const updateCarousel = () => {
      items.forEach((item) => item.classList.remove('left', 'active', 'right'));
      const leftIndex = (index + 2) % items.length;
      const activeIndex = index;
      const rightIndex = (index + 1) % items.length;

      items[leftIndex]?.classList.add('left');
      items[activeIndex]?.classList.add('active');
      items[rightIndex]?.classList.add('right');

      index = (index + 1) % items.length;
    };

    updateCarousel();
    const interval = setInterval(updateCarousel, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-5 container container-xl animate-slide-up">
      <h2 className="section-title-cyber">CORE_PROJECTS</h2>
      <div id="projectBootstrapCarousel" className="carousel slide custom-project-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div key={project.id} className={`carousel-item carousel-item-cyber ${index === 0 ? 'active' : ''}`}>
              <div className="card-cyber project-carousel-card text-center p-3">
                <img src={project.image} className="d-block w-100 img-fluid mb-3 rounded" alt={project.title} />
                <div className="mt-2">
                  <h3 className="text-cyan-300 font-orbitron mb-2">{project.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">&gt; {project.description}</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="badge bg-dark text-cyan-300 border border-cyan-600 px-2 py-1 rounded-pill font-mono">{t}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-cyber py-2 px-3 text-xs">
                      <i className="fab fa-github me-1"></i> CODEBASE
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-cyber py-2 px-3 text-xs">
                        <i className="fas fa-external-link-alt me-1"></i> VIEW_LIVE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;