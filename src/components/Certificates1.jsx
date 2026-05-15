import React, { useState } from 'react';

const CertificatesSection = () => {

  const [previewImage, setPreviewImage] = useState(null);

  const categorizedCertificates = {

    INTERNSHIPS: [

      {  
        id: 1,
        title: 'JAVA FULL STACK INTERN',
        issuer: 'VEDANI IT TECHNOLOGIES',
        date: '2025',
        description:
          'Worked on Java Full Stack Development including Spring Boot, Angular, REST APIs, MySQL, frontend integration, and responsive web applications.',
        link: '#',
        image: '../assets/VedaniInternship.jpeg',
      },{
        id: 2,
        title: 'FULL STACK JAVA DEVELOPER',
        issuer: 'THE KIRAN ACADEMY',
        date: 'APRIL 2025',
        description:
          'Completed hands-on internship training focused on Java Full Stack Development using Spring Boot, Angular, REST APIs, MySQL, and modern web technologies.',
        link: '#',
        image: '../assets/InternJava.jpg',
      },

      {
        id: 3,
        title: 'FRONTEND WEB DEVELOPMENT',
        issuer: 'TEACHNOOK',
        date: 'DECEMBER 2023',
        description:
          'Worked on responsive frontend applications and gained practical experience in HTML, CSS, JavaScript, and UI development.',
        link: '#',
        image: '../assets/InternshipWeb.jpg',
      },
    

    ],

    COURSES: [

      {
        id: 3,
        title: 'JAVA / J2EE & ANGULAR',
        issuer: 'THE KIRAN ACADEMY',
        date: '2025',
        description:
          'Comprehensive training program covering Java, Hibernate, Spring Boot, Angular, REST APIs, database connectivity, and enterprise application development.',
        link: '#',
        image: '../assets/CourseJava.jpg',
      },

      {
        id: 4,
        title: 'WEB DEVELOPMENT',
        issuer: 'TEACHNOOK',
        date: '2023',
        description:
          'Learned full web development fundamentals including HTML5, CSS3, JavaScript, responsive design, and modern frontend concepts.',
        link: '#',
        image: '../assets/CourseWeb.jpg',
      },

    ],

    ACHIEVEMENTS: [

      {
        id: 5,
        title: '3RD PRIZE – BEST PAPER AWARD',
        issuer: 'TECHNICAL SYMPOSIUM',
        date: '2024',
        description:
          'Awarded 3rd prize for technical paper presentation focused on innovative software and technology solutions.',
        link: '',
        image: '../assets/ICIKSAT.jpg',
      },

      {
        id: 6,
        title: '3RD PRIZE – PAPER PRESENTATION',
        issuer: 'ENGINEERING COLLEGE EVENT',
        date: '2024',
        description:
          'Recognized for presenting research and technical concepts effectively during inter-college paper presentation competition.',
        link: '',
        image: '../assets/CyberSecurityCert.jpg',
      },

      {
        id: 7,
        title: '2ND RANK – TECHNICAL QUIZ',
        issuer: 'INTER-COLLEGE TECH FEST',
        date: '2024',
        description:
          'Secured 2nd rank in technical quiz competition covering programming, computer science fundamentals, and problem solving.',
        link: '',
        image: '../assets/TechriseTrophy.jpeg',
      },

    ],

  };

  const [activeCategory, setActiveCategory] = useState('INTERNSHIPS');

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const CertificateCard = ({ certificate }) => {

    return (

      <div className="certificate-card">

        <div className="card-glow"></div>

        {/* Image */}
        <div className="certificate-image-container">

          <img
            src={certificate.image}
            alt={certificate.title}
            className="certificate-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/600x400/1a1a1a/00e5ff?text=CERTIFICATE';
            }}
          />

        </div>

        {/* Content */}
        <div className="certificate-content">

          <p className="certificate-status">
            ● VERIFIED
          </p>

          <h3 className="certificate-title">
            {certificate.title}
          </h3>

          <div className="certificate-meta">

            <p>
              <i className="fas fa-building"></i>
              {certificate.issuer}
            </p>

            <p>
              <i className="fas fa-calendar"></i>
              {certificate.date}
            </p>

          </div>

          <p className="certificate-description">
            {certificate.description}
          </p>

          {/* Buttons */}
          <div className="certificate-buttons">

            <button
              className="preview-btn"
              onClick={() => setPreviewImage(certificate.image)}
            >
              PREVIEW
              <i className="fas fa-eye ms-2"></i>
            </button>



          </div>

        </div>

      </div>

    );

  };

  return (

    <section
      id="certificates"
      className="certificates-section"
    >

      <div className="container container-xl">

        <h2 className="section-title-cyber">
          CERTIFICATIONS_AND_ACHIEVEMENTS
        </h2>

        <p className="certificate-subtitle">

          VERIFIED TRAINING, INTERNSHIPS & TECHNICAL ACHIEVEMENTS

        </p>

        {/* Tabs */}
        <div className="tab-navigation">

          {Object.keys(categorizedCertificates).map((category) => (

            <button
              key={category}
              className={`tab-button ${
                activeCategory === category ? 'active-tab' : ''
              }`}
              onClick={() => handleTabClick(category)}
            >

              {category}

            </button>

          ))}

        </div>

        {/* Cards */}
        <div className="certificate-grid">

          {categorizedCertificates[activeCategory].map((cert) => (

            <CertificateCard
              key={cert.id}
              certificate={cert}
            />

          ))}

        </div>

      </div>

      {/* Preview Modal */}
      {previewImage && (

        <div
          className="preview-modal"
          onClick={() => setPreviewImage(null)}
        >

          <div className="preview-content">

            <img
              src={previewImage}
              alt="Preview"
              className="preview-image"
            />

            <button
              className="close-preview"
              onClick={() => setPreviewImage(null)}
            >
              ✕
            </button>

          </div>

        </div>

      )}

      {/* CSS */}
      <style jsx>{`

        .certificates-section {
          padding: 100px 0;
          width: 100%;
          position: relative;
        }

        .certificate-subtitle {
          text-align: center;
          color: #9ca3af;
          font-family: monospace;
          margin-bottom: 40px;
          letter-spacing: 1px;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }

        .tab-button {
          padding: 12px 24px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(17, 24, 39, 0.7);
          color: #9ca3af;
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .tab-button:hover {
          color: white;
          border-color: #00e5ff;
          transform: translateY(-2px);
        }

        .active-tab {
          background: linear-gradient(
            90deg,
            #00e5ff,
            #c026d3
          );
          color: white;
          border: none;
        }

        .certificate-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .certificate-card {
          position: relative;
          background: rgba(17, 24, 39, 0.7);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: 0.4s ease;
          backdrop-filter: blur(12px);
        }

        .certificate-card:hover {
          transform: translateY(-10px);
          border-color: #00e5ff;
          box-shadow:
            0 0 25px rgba(0,229,255,0.15),
            0 0 35px rgba(192,38,211,0.15);
        }

        .card-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(
            rgba(0,229,255,0.15),
            transparent
          );
          top: -50px;
          right: -50px;
          pointer-events: none;
        }

        /* FIXED IMAGE SECTION */
        .certificate-image-container {
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          transition: 0.4s ease;
        }

        .certificate-card:hover .certificate-image {
          transform: scale(1.03);
        }

        .certificate-content {
          padding: 24px;
        }

        .certificate-status {
          color: #4ade80;
          font-size: 12px;
          font-family: monospace;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .certificate-title {
          color: #00e5ff;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 18px;
          line-height: 1.5;
        }

        .certificate-meta {
          margin-bottom: 18px;
        }

        .certificate-meta p {
          color: #9ca3af;
          font-family: monospace;
          font-size: 13px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .certificate-description {
          color: #d1d5db;
          line-height: 1.7;
          font-size: 14px;
          margin-bottom: 24px;
          min-height: 110px;
        }

        .certificate-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .certificate-btn,
        .preview-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 10px;
          text-decoration: none;
          transition: 0.3s ease;
          font-family: monospace;
          font-size: 14px;
          cursor: pointer;
        }

        .certificate-btn {
          border: 1px solid #c026d3;
          color: #c026d3;
          background: transparent;
        }

        .certificate-btn:hover {
          background: #c026d3;
          color: white;
        }

        .preview-btn {
          border: 1px solid #00e5ff;
          color: #00e5ff;
          background: transparent;
        }

        .preview-btn:hover {
          background: #00e5ff;
          color: black;
        }

        /* PREVIEW MODAL */
        .preview-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .preview-content {
          position: relative;
          max-width: 1000px;
          width: 100%;
        }

        .preview-image {
          width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 16px;
          border: 2px solid #00e5ff;
          box-shadow:
            0 0 20px rgba(0,229,255,0.4),
            0 0 40px rgba(192,38,211,0.2);
        }

        .close-preview {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #00e5ff;
          color: black;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 768px) {

          .certificate-grid {
            grid-template-columns: 1fr;
          }

          .certificate-image-container {
            height: 240px;
          }

        }

      `}</style>

    </section>

  );

};

export default CertificatesSection;