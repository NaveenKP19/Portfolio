import React, { useState, useEffect, useRef, useCallback } from "react";
import "./EducationTimeline.css"; // Ensure this CSS file is in the same directory
import { FaUserGraduate, FaSchool, FaUniversity, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

const EducationTimeline = () => {
  // timelineMode can be 'overview', 'education', 'career', or 'combined'
  const [timelineMode, setTimelineMode] = useState('overview');
  const timelineContainerRef = useRef(null);
  const svgWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Define curved paths
  const educationSegmentPathD = "M 100 125 C 250 50, 350 100, 400 40 S 550 10, 700 125 C 850 190, 950 10, 1000 40 S 1150 100, 1300 125";
  // Path connecting Graduation (1300, 125) to Main Career Bubble (1600, 100)
  const graduationToCareerPathD = "M 1300 125 C 1400 180, 1500 60, 1600 100";
  const careerSegmentPathD = "M 1600 40 C 1750 100, 1850 0, 1900 125 S 2050 190, 2200 40 C 2350 -20, 2450 190, 2500 125 S 2650 50, 2800 40";

  const educationBubbleX = 100; // X coordinate of the main education overview bubble
  const careerBubbleX = 1600;   // X coordinate of the main career overview bubble

  // --- Dragging Logic ---
  const handleMouseDown = useCallback((e) => {
    // Only allow dragging when not in 'overview' mode
    if (timelineMode === 'overview') return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(parseFloat(svgWrapperRef.current.style.transform.split('translateX(')[1]) || 0);
    timelineContainerRef.current.classList.add('dragging');
  }, [timelineMode]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || timelineMode === 'overview') return;
    e.preventDefault();
    const currentX = e.pageX;
    const walk = (currentX - startX);
    let newTranslateX = scrollLeft + walk;
    const containerWidth = timelineContainerRef.current.offsetWidth;
    const contentWidth = svgWrapperRef.current.offsetWidth;
    const minTranslateX = containerWidth - contentWidth;
    newTranslateX = Math.max(minTranslateX, newTranslateX);
    newTranslateX = Math.min(0, newTranslateX);
    svgWrapperRef.current.style.transform = `translateY(-50%) translateX(${newTranslateX}px)`;
  }, [isDragging, timelineMode, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    timelineContainerRef.current.classList.remove('dragging');
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      timelineContainerRef.current.classList.remove('dragging');
    }
  }, [isDragging]);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]);

  // Effect to handle initial positioning when timelineMode changes
  useEffect(() => {
    if (svgWrapperRef.current && timelineContainerRef.current) {
      let targetX = 0;

      if (timelineMode === 'education') {
        targetX = (timelineContainerRef.current.offsetWidth / 2) - educationBubbleX;
      } else if (timelineMode === 'career') {
        targetX = (timelineContainerRef.current.offsetWidth / 2) - careerBubbleX;
      } else if (timelineMode === 'combined') {
        const midPointX = (educationBubbleX + careerBubbleX) / 2;
        targetX = (timelineContainerRef.current.offsetWidth / 2) - midPointX;
      } else { // 'overview' mode
        targetX = 0; // Align to start for overview
      }

      const containerWidth = timelineContainerRef.current.offsetWidth;
      const contentWidth = svgWrapperRef.current.offsetWidth;
      const minTranslateX = containerWidth - contentWidth;

      const finalTranslateX = Math.max(minTranslateX, Math.min(0, targetX));
      svgWrapperRef.current.style.transform = `translateY(-50%) translateX(${finalTranslateX}px)`;
    }
  }, [timelineMode, educationBubbleX, careerBubbleX]);


  return (
    <div className="timeline-container" ref={timelineContainerRef}>
      <h2 className="timeline-title">My Journey Timeline</h2>

      {/* --- Collapsed View Bubbles (Visible only when in 'overview' mode) --- */}
      {/* Education Timeline Overview Bubble */}
      <div
        className={`timeline-overview-bubble-education ${timelineMode === 'overview' ? 'visible-element' : 'hidden-element'}`}
        onClick={() => setTimelineMode('education')} // Clicking goes to education detailed
      >
        {/* Text content handled by CSS pseudo-elements */}
      </div>

      {/* Connecting line for collapsed view (conditionally rendered) */}
      {timelineMode === 'overview' && (
        <svg className="overview-connection-svg visible-element" viewBox="0 0 400 100">
          <path d="M 0 50 L 400 50" className="overview-path" />
        </svg>
      )}

      {/* Career Timeline Overview Bubble */}
      <div
        className={`timeline-overview-bubble career ${timelineMode === 'overview' ? 'visible-element' : 'hidden-element'}`}
        data-collapsed-text="Career Timeline"
        onClick={() => setTimelineMode('career')} // Clicking goes to career detailed
      >
        {/* Text content handled by CSS pseudo-elements */}
      </div>


      {/* --- Expanded View Timeline Items --- */}
      {/* svg-wrapper is visible if any detailed section is active */}
      <div
        className={`svg-wrapper ${timelineMode !== 'overview' ? 'visible-element section-active' : 'hidden-element'}`}
        ref={svgWrapperRef}
      >
        <svg
          viewBox="0 0 3500 200"
          preserveAspectRatio="none"
          className={`timeline-svg ${timelineMode !== 'overview' ? 'visible-element' : 'hidden-element'}`}
        >
          {/* Education Segment Path - visible if 'education' or 'combined' */}
          <path
            d={educationSegmentPathD}
            className={`timeline-path ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
          />
          {/* UPDATED: Path joining Graduation to Main Career Bubble */}
          {/* This path is now visible if 'education', 'career', or 'combined' mode is active */}
          <path
            d={graduationToCareerPathD}
            className={`timeline-path ${['education', 'career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
            stroke="#ff4d4d" // Red color as in image_7c3a25.png
            strokeDasharray="8 8" // Dashed line as in image_7c3a25.png
            strokeWidth="3"
          />
          {/* Career Segment Path - visible if 'career' or 'combined' */}
          <path
            d={careerSegmentPathD}
            className={`timeline-path ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
          />
        </svg>

        {/* --- Main Education Bubble (Always visible in expanded view) --- */}
        <div
          className={`timeline-icon icon-main-education visible-element`}
          onClick={() => {
            if (timelineMode === 'education') {
              setTimelineMode('overview'); // If only education, go to overview
            } else if (timelineMode === 'combined') {
              setTimelineMode('career'); // If combined, remove education, go to career
            } else { // timelineMode === 'career' or 'overview'
              setTimelineMode('combined'); // Add education to existing career, or go directly to combined if from overview
            }
          }}
        >
          <span className="timeline-label">Education Timeline</span>
          <span className="timeline-year">Overview</span>
          <div className="timeline-tooltip">
            <h1>Education Summary</h1>
            <p>A complete overview of my academic journey.</p>
          </div>
        </div>

        {/* --- Education Section Detail Items (Visible if 'education' or 'combined') --- */}
        <div className={`timeline-icon icon-ssc ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaSchool />
          <span className="timeline-label">SSC</span>
          <span className="timeline-year">2017</span>
          <div className="timeline-tooltip">
            <h1>Percentage: 84.20%</h1>
            <p>Board: LATUR</p>
            <p>School: Sandeepani Public School, Nanded</p>
          </div>
        </div>

        <div className={`timeline-icon icon-hsc ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaUniversity />
          <span className="timeline-label">HSC</span>
          <span className="timeline-year">2019</span>
          <div className="timeline-tooltip">
            <h1>Percentage: 54%</h1>
            <p>Board: LATUR</p>
            <p>College: N.E.S. Science College, Nanded</p>
          </div>
        </div>

        <div className={`timeline-icon icon-diploma ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
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

        <div className={`timeline-icon icon-graduation ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
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

        {/* --- Main Career Bubble (Always visible in expanded view) --- */}
        <div
          className={`timeline-icon icon-main-career visible-element`}
          onClick={() => {
            if (timelineMode === 'career') {
              setTimelineMode('overview'); // If only career, go to overview
            } else if (timelineMode === 'combined') {
              setTimelineMode('education'); // If combined, remove career, go to education
            } else { // timelineMode === 'education' or 'overview'
              setTimelineMode('combined'); // Add career to existing education, or go directly to combined if from overview
            }
          }}
        >
          <span className="timeline-label">Career Timeline</span>
          <span className="timeline-year">Overview</span>
          <div className="timeline-tooltip">
            <h1>Career Summary</h1>
            <p>Highlights of my professional experience and aspirations.</p>
          </div>
        </div>

        {/* --- Career Section Detail Items (Visible if 'career' or 'combined') --- */}
        <div className={`timeline-icon icon-intern ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaBriefcase />
          <span className="timeline-label">Software Intern</span>
          <span className="timeline-year">2023</span>
          <div className="timeline-tooltip">
            <h1>Company: Tech Solutions Inc.</h1>
            <p>Role: Developed front-end features using React.</p>
            <p>Duration: 6 months</p>
          </div>
        </div>

        <div className={`timeline-icon icon-junior-dev ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaGraduationCap />
          <span className="timeline-label">Junior Developer</span>
          <span className="timeline-year">2024 - Present</span>
          <div className="timeline-tooltip">
            <h1>Company: Innovate Systems</h1>
            <p>Role: Full-stack development, API integration.</p>
            <p>Key Projects: E-commerce platform, internal tools.</p>
          </div>
        </div>

        <div className={`timeline-icon icon-project-lead ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaBriefcase />
          <span className="timeline-label">Project Lead</span>
          <span className="timeline-year">2026 (Expected)</span>
          <div className="timeline-tooltip">
            <h1>Company: Global Tech Solutions</h1>
            <p>Role: Leading a small development team.</p>
            <p>Focus: Cloud architecture & DevOps.</p>
          </div>
        </div>

        <div className={`timeline-icon icon-senior-arch ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}>
          <FaBriefcase />
          <span className="timeline-label">Senior Architect</span>
          <span className="timeline-year">2028 (Expected)</span>
          <div className="timeline-tooltip">
            <h1>Company: Future Innovations</h1>
            <p>Role: Designed scalable microservices architecture.</p>
            <p>Technology: AWS, Kubernetes, Node.js</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationTimeline;