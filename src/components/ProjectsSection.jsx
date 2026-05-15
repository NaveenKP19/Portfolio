// import React from 'react';

// const projectData = [

//   {
//     title: 'TASKORA',
//     image: '/assets/taskora.png',
//     status: 'FULL-STACK TASK MANAGEMENT SYSTEM',
//     description:
//       'A scalable task management platform developed using Angular and Spring Boot with authentication, Twilio SMS reminders, user dashboards, notifications, and MySQL integration.',

//     features: [
//       'User Authentication & Authorization',
//       'Task Scheduling & Notifications',
//       'Twilio SMS Reminder Integration',
//       'Responsive Dashboard UI'
//     ],

//     techBadges: [
//       'Angular',
//       'Spring Boot',
//       'MySQL',
//       'Twilio',
//       'REST API'
//     ],

//     github: 'https://github.com/NaveenKP19/Taskora-WEb-Application',
//     demo: 'https://drive.google.com/file/d/1z4N-7bvMYJ6kk15O4zvsFxH8kBgJQKti/view?usp=sharing'
//   },

//   {
//     title: 'CLIMEX',
//     image: '/assets/climax.jpg',
//     status: 'WEATHER FORECAST APPLICATION',
//     description:
//       'A modern responsive weather application using HTML, CSS, and JavaScript with real-time weather data, animated UI, geolocation, and dynamic backgrounds.',

//     features: [
//       'Real-Time Weather API',
//       '6-Day Forecast System',
//       'Geolocation Detection',
//       'Dynamic Animated Backgrounds'
//     ],

//     techBadges: [
//       'JavaScript',
//       'HTML5',
//       'CSS3',
//       'Weather API'
//     ],

//     github: 'https://github.com/NaveenKP19/ClimaX--Application',
//     demo: 'https://drive.google.com/file/d/1LnkpnSpq44PS4O1VinKfIzYInz6v-MXv/view?usp=sharing'
//   },

//   {
//     title: 'SOCIAL POST APP',
//     image: '/assets/social.png',
//     status: 'ANGULAR SOCIAL MEDIA MANAGER',
//     description:
//       'A single-page social media post management system supporting post creation, editing, deletion, filtering, and dynamic timestamp tracking.',

//     features: [
//       'CRUD Operations',
//       'Post Filtering System',
//       'Responsive UI',
//       'Dynamic Post Management'
//     ],

//     techBadges: [
//       'Angular',
//       'TypeScript',
//       'Bootstrap',
//       'Responsive UI'
//     ],

//     github: 'https://github.com/NaveenKP19/Social-Media-Post',
//     demo: 'https://drive.google.com/file/d/1fWfEtjX6yXmbKZlwncvGapvQcFZgWdHI/view?usp=sharing'
//   },

  

// ];

// const ProjectsSection = () => {

//   return (

//     <section
//       id="projects"
//       className="projects-section py-5"
//     >

//       <div className="container container-xl">

//         {/* Section Title */}
//         <h2 className="section-title-cyber">
//           PROJECT_ARCHIVE
//         </h2>

//         {/* Featured Project */}
//         <div className="featured-project-card mb-5">

//           <div className="row align-items-center g-5">

//             {/* Left Image */}
//             <div className="col-lg-6">

//               <div className="project-image-wrapper">

//                 <img
//                   src={projectData[0].image}
//                   alt={projectData[0].title}
//                   className="img-fluid featured-project-image"
//                 />

//                 <div className="image-overlay"></div>

//               </div>

//             </div>

//             {/* Right Content */}
//             <div className="col-lg-6">

//               <p className="project-status">
//                 ● FEATURED PROJECT
//               </p>

//               <h3 className="featured-title">
//                 {projectData[0].title}
//               </h3>

//               <p className="featured-subtitle">
//                 {projectData[0].status}
//               </p>

//               <p className="project-description">
//                 {projectData[0].description}
//               </p>

//               {/* Features */}
//               <div className="mb-4">

//                 {projectData[0].features.map((feature, index) => (

//                   <div
//                     key={index}
//                     className="feature-item"
//                   >

//                     <i className="fas fa-check-circle text-cyan-400 me-2"></i>

//                     {feature}

//                   </div>

//                 ))}

//               </div>

//               {/* Tech Stack */}
//               <div className="d-flex flex-wrap gap-2 mb-4">

//                 {projectData[0].techBadges.map((tech, index) => (

//                   <span
//                     key={index}
//                     className="tech-badge"
//                   >
//                     {tech}
//                   </span>

//                 ))}

//               </div>

//               {/* Buttons */}
//               <div className="d-flex flex-wrap gap-3">

//                 <a
//                   href={projectData[0].github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-cyber"
//                 >

//                   GITHUB
//                   <i className="fab fa-github ms-2"></i>

//                 </a>

//                 <a
//                   href={projectData[0].demo}
//                   className="btn btn-cyber border border-fuchsia-500 text-fuchsia-300"
//                 >

//                   LIVE DEMO
//                   <i className="fas fa-external-link-alt ms-2"></i>

//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* Other Projects Grid */}
//         <div className="row g-4">

//           {projectData.slice(1).map((project, index) => (

//             <div
//               className="col-md-6 col-lg-4"
//               key={index}
//             >

//               <div className="project-card h-100">

//                 {/* Image */}
//                 <div className="project-image-wrapper">

//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="img-fluid project-image"
//                   />

//                   <div className="image-overlay"></div>

//                 </div>

//                 {/* Content */}
//                 <div className="project-content">

//                   <p className="project-status-small">
//                     {project.status}
//                   </p>

//                   <h3 className="project-title">
//                     {project.title}
//                   </h3>

//                   <p className="project-description-small">
//                     {project.description}
//                   </p>

//                   {/* Features */}
//                   <div className="mb-3">

//                     {project.features.map((feature, featureIndex) => (

//                       <div
//                         key={featureIndex}
//                         className="feature-item-small"
//                       >

//                         <i className="fas fa-circle text-cyan-400 me-2 small"></i>

//                         {feature}

//                       </div>

//                     ))}

//                   </div>

//                   {/* Tech Stack */}
//                   <div className="d-flex flex-wrap gap-2 mb-4">

//                     {project.techBadges.map((tech, techIndex) => (

//                       <span
//                         key={techIndex}
//                         className="tech-badge-small"
//                       >
//                         {tech}
//                       </span>

//                     ))}

//                   </div>

//                   {/* Buttons */}
//                   <div className="d-flex gap-3 mt-auto">

//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="project-btn"
//                     >

//                       CODE

//                     </a>

//                     <a
//                       href={project.demo}
//                       className="project-btn demo-btn"
//                     >

//                       DEMO

//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* CSS */}
//       <style jsx>{`

//         .projects-section {
//           position: relative;
//         }

//         .featured-project-card {
//           background: rgba(17, 24, 39, 0.75);
//           border: 1px solid rgba(0,255,255,0.15);
//           border-radius: 24px;
//           padding: 40px;
//           backdrop-filter: blur(10px);
//           box-shadow:
//             0 0 25px rgba(0,255,255,0.08),
//             0 0 35px rgba(255,0,255,0.08);
//         }

//         .featured-project-card:hover {
//           border-color: #00e5ff;
//           transition: 0.4s ease;
//         }

//         .project-image-wrapper {
//           position: relative;
//           overflow: hidden;
//           border-radius: 18px;
//         }

//         .featured-project-image,
//         .project-image {
//           width: 100%;
//           border-radius: 18px;
//           transition: 0.5s ease;
//         }

//         .project-image-wrapper:hover img {
//           transform: scale(1.05);
//         }

//         .image-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(0,0,0,0.5),
//             transparent
//           );
//         }

//         .project-status {
//           color: #4ade80;
//           font-family: monospace;
//           letter-spacing: 2px;
//           margin-bottom: 12px;
//         }

//         .featured-title {
//           font-size: 3rem;
//           color: #00e5ff;
//           font-family: 'Orbitron', sans-serif;
//           margin-bottom: 10px;
//         }

//         .featured-subtitle {
//           color: #c026d3;
//           font-family: monospace;
//           margin-bottom: 20px;
//           letter-spacing: 1px;
//         }

//         .project-description {
//           color: #d1d5db;
//           line-height: 1.9;
//           margin-bottom: 24px;
//           font-family: monospace;
//         }

//         .feature-item {
//           color: #9ca3af;
//           margin-bottom: 10px;
//           font-family: monospace;
//         }

//         .project-card {
//           background: rgba(17, 24, 39, 0.75);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 20px;
//           overflow: hidden;
//           transition: 0.4s ease;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .project-card:hover {
//           transform: translateY(-8px);
//           border-color: #00e5ff;
//           box-shadow:
//             0 0 20px rgba(0,255,255,0.2),
//             0 0 30px rgba(255,0,255,0.15);
//         }

//         .project-content {
//           padding: 24px;
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .project-status-small {
//           color: #4ade80;
//           font-size: 12px;
//           font-family: monospace;
//           margin-bottom: 12px;
//           letter-spacing: 1px;
//         }

//         .project-title {
//           color: #00e5ff;
//           font-family: 'Orbitron', sans-serif;
//           margin-bottom: 16px;
//           font-size: 1.4rem;
//         }

//         .project-description-small {
//           color: #9ca3af;
//           font-size: 14px;
//           line-height: 1.8;
//           margin-bottom: 20px;
//           font-family: monospace;
//         }

//         .feature-item-small {
//           color: #d1d5db;
//           font-size: 13px;
//           margin-bottom: 8px;
//           font-family: monospace;
//         }

//         .tech-badge-small {
//           border: 1px solid rgba(0,255,255,0.2);
//           color: #00e5ff;
//           padding: 6px 12px;
//           border-radius: 999px;
//           font-size: 12px;
//           font-family: monospace;
//         }

//         .project-btn {
//           flex: 1;
//           text-align: center;
//           padding: 10px 16px;
//           border-radius: 10px;
//           border: 1px solid #00e5ff;
//           color: #00e5ff;
//           text-decoration: none;
//           font-family: monospace;
//           transition: 0.3s ease;
//         }

//         .project-btn:hover {
//           background: #00e5ff;
//           color: black;
//         }

//         .demo-btn {
//           border-color: #c026d3;
//           color: #c026d3;
//         }

//         .demo-btn:hover {
//           background: #c026d3;
//           color: white;
//         }

//         @media (max-width: 768px) {

//           .featured-title {
//             font-size: 2rem;
//           }

//           .featured-project-card {
//             padding: 24px;
//           }

//         }

//       `}</style>

//     </section>

//   );
// };

// export default ProjectsSection;

import React, { useState } from 'react';

const projectData = [

  {
    title: 'TASKORA',
    image: '/assets/taskora.png',
    status: 'FULL-STACK TASK MANAGEMENT SYSTEM',
    description:
      'A scalable task management platform developed using Angular and Spring Boot with authentication, Twilio SMS reminders, user dashboards, notifications, and MySQL integration.',

    features: [
      'User Authentication & Authorization',
      'Task Scheduling & Notifications',
      'Twilio SMS Reminder Integration',
      'Responsive Dashboard UI'
    ],

    techBadges: [
      'Angular',
      'Spring Boot',
      'MySQL',
      'Twilio',
      'REST API'
    ],

    github: 'https://github.com/NaveenKP19/Taskora-WEb-Application',
    demo: 'https://drive.google.com/file/d/1z4N-7bvMYJ6kk15O4zvsFxH8kBgJQKti/view?usp=sharing'
  },

  {
    title: 'CLIMEX',
    image: '/assets/climax.jpg',
    status: 'WEATHER FORECAST APPLICATION',
    description:
      'A modern responsive weather application using HTML, CSS, and JavaScript with real-time weather data, animated UI, geolocation, and dynamic backgrounds.',

    features: [
      'Real-Time Weather API',
      '6-Day Forecast System',
      'Geolocation Detection',
      'Dynamic Animated Backgrounds'
    ],

    techBadges: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Weather API'
    ],

    github: 'https://github.com/NaveenKP19/ClimaX--Application',
    demo: 'https://drive.google.com/file/d/1LnkpnSpq44PS4O1VinKfIzYInz6v-MXv/view?usp=sharing'
  },

  {
    title: 'SOCIAL POST APP',
    image: '/assets/social.png',
    status: 'ANGULAR SOCIAL MEDIA MANAGER',
    description:
      'A single-page social media post management system supporting post creation, editing, deletion, filtering, and dynamic timestamp tracking.',

    features: [
      'CRUD Operations',
      'Post Filtering System',
      'Responsive UI',
      'Dynamic Post Management'
    ],

    techBadges: [
      'Angular',
      'TypeScript',
      'Bootstrap',
      'Responsive UI'
    ],

    github: 'https://github.com/NaveenKP19/Social-Media-Post',
    demo: 'https://drive.google.com/file/d/1fWfEtjX6yXmbKZlwncvGapvQcFZgWdHI/view?usp=sharing'
  },

];

const ProjectsSection = () => {

  const [previewImage, setPreviewImage] = useState(null);

  const techColors = {
    Angular: '#dd0031',
    'Spring Boot': '#6db33f',
    MySQL: '#00758f',
    Twilio: '#f22f46',
    'REST API': '#00c2ff',
    JavaScript: '#f7df1e',
    HTML5: '#ff5722',
    CSS3: '#2196f3',
    'Weather API': '#00bcd4',
    TypeScript: '#3178c6',
    Bootstrap: '#7952b3',
    'Responsive UI': '#00e676',
  };

  return (

    <section
      id="projects"
      className="projects-section py-5"
    >

      <div className="container container-xl">

        {/* Title */}
        <h2 className="section-title-cyber text-center mb-5">
          PROJECT_ARCHIVE
        </h2>

        {/* Featured Project */}
        <div className="featured-project-card mb-5">

          <div className="row align-items-center g-5">

            {/* Left Image */}
            <div className="col-lg-6">

              <div className="project-image-wrapper">

                <img
                  src={projectData[0].image}
                  alt={projectData[0].title}
                  className="img-fluid featured-project-image"
                />

                <div className="image-overlay"></div>

              </div>

              {/* Preview Button */}
              <div className="mt-3 text-center">

                <button
                  className="preview-btn"
                  onClick={() => setPreviewImage(projectData[0].image)}
                >

                  PREVIEW IMAGE

                </button>

              </div>

            </div>

            {/* Right Content */}
            <div className="col-lg-6">

              <p className="project-status">
                ● FEATURED PROJECT
              </p>

              <h3 className="featured-title">
                {projectData[0].title}
              </h3>

              <p className="featured-subtitle">
                {projectData[0].status}
              </p>

              <p className="project-description">
                {projectData[0].description}
              </p>

              {/* Features */}
              <div className="mb-4">

                {projectData[0].features.map((feature, index) => (

                  <div
                    key={index}
                    className="feature-item"
                  >

                    <i className="fas fa-check-circle text-info me-2"></i>

                    {feature}

                  </div>

                ))}

              </div>

              {/* Tech Stack */}
              <div className="d-flex flex-wrap gap-3 mb-4">

                {projectData[0].techBadges.map((tech, index) => (

                  <span
                    key={index}
                    className="custom-tech-badge"
                    style={{
                      background: techColors[tech] || '#00e5ff',
                      boxShadow: `0 0 15px ${techColors[tech] || '#00e5ff'}`
                    }}
                  >

                    {tech}

                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">

                <a
                  href={projectData[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-cyber"
                >

                  GITHUB
                  <i className="fab fa-github ms-2"></i>

                </a>

                <a
                  href={projectData[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-demo"
                >

                  LIVE DEMO
                  <i className="fas fa-external-link-alt ms-2"></i>

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Other Projects */}
        <div className="row g-4">

          {projectData.slice(1).map((project, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="project-card h-100">

                {/* Image */}
                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-image"
                  />

                  <div className="image-overlay"></div>

                </div>

                {/* Preview Button */}
                <div className="mt-3 text-center">

                  <button
                    className="preview-btn"
                    onClick={() => setPreviewImage(project.image)}
                  >

                    PREVIEW IMAGE

                  </button>

                </div>

                {/* Content */}
                <div className="project-content">

                  <p className="project-status-small">
                    {project.status}
                  </p>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description-small">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-3">

                    {project.features.map((feature, featureIndex) => (

                      <div
                        key={featureIndex}
                        className="feature-item-small"
                      >

                        <i className="fas fa-circle text-info me-2 small"></i>

                        {feature}

                      </div>

                    ))}

                  </div>

                  {/* Tech Stack */}
                  <div className="d-flex flex-wrap gap-2 mb-4">

                    {project.techBadges.map((tech, techIndex) => (

                      <span
                        key={techIndex}
                        className="custom-tech-badge small-badge"
                        style={{
                          background: techColors[tech] || '#00e5ff',
                          boxShadow: `0 0 12px ${techColors[tech] || '#00e5ff'}`
                        }}
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-3 mt-auto">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >

                      CODE

                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                    >

                      DEMO

                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Preview Modal */}
      {previewImage && (

        <div
          className="preview-modal"
          onClick={() => setPreviewImage(null)}
        >

          <img
            src={previewImage}
            alt="Preview"
            className="preview-modal-image"
          />

        </div>

      )}

      {/* CSS */}
      <style jsx>{`

        .projects-section {
          position: relative;
        }

        .featured-project-card {
          background: rgba(17, 24, 39, 0.75);
          border: 1px solid rgba(0,255,255,0.15);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(10px);
        }

        .project-card {
          background: rgba(17, 24, 39, 0.75);
          border-radius: 20px;
          overflow: hidden;
          transition: 0.4s ease;
          border: 1px solid rgba(255,255,255,0.08);
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #00e5ff;
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
        }

        .featured-project-image,
        .project-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 18px;
          transition: 0.5s ease;
        }

        .project-image-wrapper:hover img {
          transform: scale(1.05);
        }

        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-status,
        .project-status-small {
          color: #4ade80;
          font-family: monospace;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .featured-title,
        .project-title {
          color: #00e5ff;
          font-family: 'Orbitron', sans-serif;
          margin-bottom: 14px;
        }

        .featured-title {
          font-size: 2.8rem;
        }

        .project-title {
          font-size: 1.5rem;
        }

        .featured-subtitle {
          color: #c026d3;
          margin-bottom: 18px;
          font-family: monospace;
        }

        .project-description,
        .project-description-small {
          color: #d1d5db;
          line-height: 1.8;
          font-family: monospace;
        }

        .feature-item,
        .feature-item-small {
          color: #d1d5db;
          margin-bottom: 10px;
          font-family: monospace;
        }

        .custom-tech-badge {
          padding: 10px 18px;
          border-radius: 30px;
          color: white;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1px;
          border: 1px solid rgba(255,255,255,0.15);
          transition: 0.3s ease;
        }

        .custom-tech-badge:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .small-badge {
          font-size: 11px;
          padding: 8px 14px;
        }

        .btn-cyber,
        .btn-demo,
        .project-btn,
        .preview-btn {
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          font-family: monospace;
          transition: 0.3s ease;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
        }

        .btn-cyber,
        .project-btn {
          background: #00e5ff;
          color: black;
        }

        .btn-demo,
        .demo-btn {
          background: #c026d3;
          color: white;
        }

        .preview-btn {
          background: #111827;
          color: #00e5ff;
          border: 1px solid #00e5ff;
          width: 90%;
        }

        .preview-btn:hover {
          background: #00e5ff;
          color: black;
        }

        .preview-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }

        .preview-modal-image {
          max-width: 95%;
          max-height: 90vh;
          border-radius: 20px;
          border: 3px solid #00e5ff;
        }

        @media (max-width: 768px) {

          .featured-title {
            font-size: 2rem;
          }

          .featured-project-card {
            padding: 24px;
          }

          .featured-project-image,
          .project-image {
            height: 220px;
          }

        }

      `}</style>

    </section>

  );
};

export default ProjectsSection;