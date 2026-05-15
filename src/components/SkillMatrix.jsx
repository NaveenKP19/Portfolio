import React from 'react';

const SkillMatrix = () => {
  const skillsData = [
    { icon: "fas fa-microchip", title: "LANGUAGES", color: "text-cyan-400", bgText: "text-cyan-200", desc: "Java, JavaScript, TypeScript, HTML/HTML5, CSS/CSS3", delay: "" },
    { icon: "fas fa-desktop", title: "FRONTEND", color: "text-fuchsia-400", bgText: "text-fuchsia-200", desc: "Angular, React", delay: "delay-100" },
    { icon: "fas fa-layer-group", title: "BACKEND", color: "text-green-400", bgText: "text-green-200", desc: "Java", delay: "delay-200" },
    { icon: "fas fa-database", title: "DATABASES", color: "text-yellow-400", bgText: "text-yellow-200", desc: "MySQL, PostgreSQL", delay: "delay-300" },
    { icon: "fas fa-mobile-alt", title: "APP DEVELOPMENT", color: "text-cyan-400", bgText: "text-cyan-200", desc: "React Native, Expo", delay: "delay-300" },
    { icon: "fas fa-code-branch", title: "VERSION_CONTROL", color: "text-purple-400", bgText: "text-purple-200", desc: "Git, GitHub", delay: "delay-600" },
    { icon: "fas fa-plug", title: "API & TOOLS", color: "text-orange-400", bgText: "text-orange-200", desc: "Postman, REST API, Swagger, Twilio", delay: "delay-500" },
    { icon: "fas fa-tools", title: "IDEs & UTILITIES", color: "text-teal-400", bgText: "text-teal-200", desc: "IntelliJ IDEA, Eclipse, Logger Tools", delay: "delay-700" }
  ];

  return (
    <section id="skills" className="py-5 py-md-5 container container-xl animate-slide-up" style={{ animationDelay: '1s' }}>
      <h2 className="section-title-cyber">SKILL_MATRIX</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {skillsData.map((skill, index) => (
          <div className="col" key={index}>
            <div className="card-cyber text-center d-flex flex-column align-items-center">
              <i className={`${skill.icon} fa-3x ${skill.color} mb-3 animate-bounce-slow ${skill.delay}`}></i>
              <h3 className={`fs-4 fw-bold mb-2 font-orbitron ${skill.bgText}`}>{skill.title}</h3>
              <p className="text-gray-400 text-sm font-mono">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillMatrix;