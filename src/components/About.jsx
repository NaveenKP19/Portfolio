// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '0.8s' }}>
//       <h2 className="section-title-cyber">ABOUT_ME</h2>
//       <div className="row align-items-center g-5">
//         <div className="col-md-6">
//           <div className="text-lg text-gray-300 leading-relaxed space-y-4 font-mono border-start border-4 border-cyan-500 ps-4 py-2">
//             <p>
//   &gt; HELLO. I AM <span className="fw-bold text-cyan-300">NAVEEN PATHAK</span>, A PASSIONATE <span className="fw-bold text-fuchsia-300">FULL-STACK JAVA DEVELOPER</span> SPECIALIZING IN BUILDING MODERN, SCALABLE, AND USER-CENTRIC WEB APPLICATIONS. I COMPLETED MY <span className="text-fuchsia-300">B.TECH IN COMPUTER SCIENCE & ENGINEERING (2024)</span> AND HAVE BEEN CONSISTENTLY SHARPENING MY SKILLS THROUGH REAL-WORLD PROJECT DEVELOPMENT AND PROBLEM SOLVING.
// </p>

// <p>
//   &gt; MY TECH STACK INCLUDES <span className="text-fuchsia-300">JAVA, SPRING BOOT, HIBERNATE, ANGULAR, TYPESCRIPT, JAVASCRIPT, MYSQL, HTML, CSS</span>, AND REST API DEVELOPMENT. I HAVE DEVELOPED FULL-STACK APPLICATIONS SUCH AS <span className="text-cyan-300">TASKORA, CLIMEX, SOCIAL MEDIA POST MANAGER, AND EMPLOYEE MANAGEMENT SYSTEM</span>, FOCUSING ON AUTHENTICATION, TASK AUTOMATION, RESPONSIVE UI DESIGN, DATABASE MANAGEMENT, AND CLEAN SOFTWARE ARCHITECTURE.
// </p>

// <p>
//   &gt; I AM ALSO ACTIVELY ENGAGED IN <span className="text-fuchsia-300">DATA STRUCTURES & ALGORITHMS, LEETCODE PROBLEM SOLVING, UI/UX ENHANCEMENT, AND CONTINUOUS LEARNING OF MODERN DEVELOPMENT TOOLS</span>. MY GOAL IS TO CREATE IMPACTFUL DIGITAL EXPERIENCES WHILE GROWING AS A SOFTWARE ENGINEER THROUGH INNOVATION, TEAMWORK, AND CHALLENGING OPPORTUNITIES.
// </p>
//           </div>
//         </div>
//         <div className="col-md-6 d-flex justify-content-center">
//           <div className="profile-img-container">
//             <img src="/assets/Naveen1.jpg" alt="Your Profile" className="img-fluid" />
//             <div className="profile-img-overlay"></div>
//             <div className="profile-img-dashed-border"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {

  const highlights = [
    "Full-Stack Web Development",
    "REST API Development",
    "Responsive UI Design",
    "DSA & Problem Solving"
  ];

  return (

    <section
      id="about"
      className="py-5 py-md-5 container container-xl animate-slide-up"
      style={{ animationDelay: '0.8s' }}
    >

      <h2 className="section-title-cyber">
        ABOUT_ME
      </h2>

      <div className="row align-items-center g-5">

        {/* Left Content */}
        <div className="col-lg-7">

          <div className="about-card">

            <div className="text-lg text-gray-300 font-mono about-content">

              <p>

                &gt; HELLO. I AM
                <span className="fw-bold text-cyan-300">
                  {" "}NAVEEN PATHAK
                </span>,
                A PASSIONATE
                <span className="fw-bold text-fuchsia-300">
                  {" "}FULL-STACK JAVA DEVELOPER
                </span>
                SPECIALIZING IN BUILDING SCALABLE,
                USER-CENTRIC WEB APPLICATIONS.

              </p>

              <p>

                &gt; I COMPLETED MY
                <span className="text-fuchsia-300">
                  {" "}B.TECH IN COMPUTER SCIENCE & ENGINEERING (2024)
                </span>
                AND HAVE DEVELOPED MULTIPLE PROJECTS
                USING SPRING BOOT, ANGULAR,
                MYSQL, HIBERNATE, TYPESCRIPT,
                HTML, CSS, AND REST APIs.

              </p>

              <p>

                &gt; MY PROJECTS INCLUDING
                <span className="text-cyan-300">
                  {" "}TASKORA, CLIMEX,
                  EMPLOYEE MANAGEMENT SYSTEM,
                  AND SOCIAL MEDIA POST MANAGER
                </span>
                FOCUS ON CLEAN ARCHITECTURE,
                RESPONSIVE DESIGN,
                AUTHENTICATION,
                AND REAL-WORLD FUNCTIONALITY.

              </p>

              <p>

                &gt; CURRENTLY IMPROVING MY
                <span className="text-fuchsia-300">
                  {" "}DATA STRUCTURES & ALGORITHMS
                </span>,
                LEETCODE PROBLEM SOLVING,
                AND MODERN FULL-STACK DEVELOPMENT SKILLS.

              </p>

            </div>

            {/* Highlights */}
            <div className="row g-3 mt-4">

              {highlights.map((item, index) => (

                <div className="col-sm-6" key={index}>

                  <div className="highlight-box">

                    <i className="fas fa-check-circle text-cyan-400 me-2"></i>

                    <span className="font-mono text-gray-300">
                      {item}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="col-lg-5 d-flex justify-content-center">

          <div className="profile-img-container">

            <img
              src="/assets/Naveen1.jpg"
              alt="Naveen Pathak"
              className="img-fluid profile-img"
            />

            <div className="profile-img-overlay"></div>

            <div className="profile-img-dashed-border"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;