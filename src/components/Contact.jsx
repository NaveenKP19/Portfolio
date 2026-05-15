import React from 'react';

const Contact = ({ handleFormSubmit }) => {
  return (
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
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;