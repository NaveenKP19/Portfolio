import React from "react";
import "./EducationTimeline.css";
import { FaUserGraduate, FaSchool, FaUniversity } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

const EducationTimeline = () => {
  return (
    <div className="timeline-container">
      {/* Heading in separate div */}
      <div className="timeline-heading">
        <h2 className="timeline-title">Education Timeline</h2>
      </div>

      <div className="svg-wrapper">
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="timeline-svg"
        >
          <path
            d="M 60 110 C 520 -110 , 350 300,850 40 S 900 40"
            className="timeline-path"
          />
        </svg>

        {/* SSC */}
        <div className="timeline-icon icon1">
          <FaSchool />
          <span className="timeline-label">SSC</span>
          <span className="timeline-year">2017</span>
          <div className="timeline-tooltip">
            <h1>Percentage: 84.20%</h1>
            <p>Board: LATUR</p>
            <p>School: Sandeepani Public School, Nanded</p>
          </div>
        </div>

        {/* HSC */}
        <div className="timeline-icon icon2">
          <FaUniversity />
          <span className="timeline-label">HSC</span>
          <span className="timeline-year">2019</span>
          <div className="timeline-tooltip">
            <h1>Percentage: 54%</h1>
            <p>Board: LATUR</p>
            <p>College: N.E.S. Science College, Nanded</p>
          </div>
        </div>

        {/* Diploma */}
        <div className="timeline-icon icon3">
          <GiDiploma />
          <span className="timeline-label">Diploma</span>
          <span className="timeline-year">2021</span>
          <div className="timeline-tooltip">
            <h1>Percentage: 82%</h1>
            <p>Branch: CSE</p>
            <p>College: Abha Gaikwad Patil College of Engineering, Nagpur</p>
            <p>Board: MSBTE</p>
          </div>
        </div>

        {/* Graduation */}
        <div className="timeline-icon icon4">
          <FaUserGraduate />
          <span className="timeline-label">Graduation</span>
          <span className="timeline-year">2024</span>
          <div className="timeline-tooltip">
            <h1>CGPA: 8.02</h1>
            <p>Branch: CSE</p>
            <p>College: TULSIRAMJI Gaikwad Patil College of Engineering and Technology, Nagpur</p>
            <p>University: NAGPUR University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
