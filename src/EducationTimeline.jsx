import React, { useState, useEffect, useRef, useCallback } from "react";
import "./EducationTimeline.css";
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
    const [showHint, setShowHint] = useState(true); // New state for the hint

    // Define curved paths
    const educationSegmentPathD = "M 100 125 C 250 50, 350 100, 400 40 S 550 10, 700 125 C 850 190, 950 10, 1000 40 S 1150 100, 1300 125";
    const graduationToCareerPathD = "M 1300 125 C 1400 180, 1500 60, 1600 100";
    const careerSegmentPathD = "M 1600 100 S 1750 200, 1900 135 S 2050 190, 2200 40 C 2350 -20, 2450 190, 2500 125 S 2650 50, 2800 40";


    const educationBubbleX = 100;
    const careerBubbleX = 1600;

    // --- Dragging Logic ---
    const handleMouseDown = useCallback((e) => {
        if (timelineMode === 'overview') return;
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(parseFloat(svgWrapperRef.current.style.transform.split('translateX(')[1]) || 0);
        timelineContainerRef.current.classList.add('dragging');
        setShowHint(false); // Hide hint on first drag
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
                targetX = 0;
            }

            const containerWidth = timelineContainerRef.current.offsetWidth;
            const contentWidth = svgWrapperRef.current.offsetWidth;
            const minTranslateX = containerWidth - contentWidth;

            const finalTranslateX = Math.max(minTranslateX, Math.min(0, targetX));
            svgWrapperRef.current.style.transform = `translateY(-50%) translateX(${finalTranslateX}px)`;
        }
    }, [timelineMode, educationBubbleX, careerBubbleX]);

    // Added useEffect to control hint visibility
    useEffect(() => {
        if (timelineMode !== 'overview' && showHint) {
            const timer = setTimeout(() => {
                setShowHint(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [timelineMode, showHint]);


    return (
        <div className="timeline-container" ref={timelineContainerRef}>
            <h2 className="timeline-title">My Journey Timeline</h2>

            {showHint && timelineMode !== 'overview' && (
                <div className="drag-hint">
                    <span>Drag to explore horizontally</span>
                </div>
            )}

            <div
                className={`timeline-overview-bubble-education ${timelineMode === 'overview' ? 'visible-element' : 'hidden-element'}`}
                onClick={() => {
                    setTimelineMode('education');
                    setShowHint(true); // Reset hint on entering a section
                }}
            >
            </div>

            {timelineMode === 'overview' && (
                <svg className="overview-connection-svg visible-element" viewBox="0 0 400 100">
                    <path d="M 0 50 L 400 50" className="overview-path" />
                </svg>
            )}

            <div
                className={`timeline-overview-bubble career ${timelineMode === 'overview' ? 'visible-element' : 'hidden-element'}`}
                data-collapsed-text="Career Timeline"
                onClick={() => {
                    setTimelineMode('career');
                    setShowHint(true); // Reset hint on entering a section
                }}
            >
            </div>

            <div
                className={`svg-wrapper ${timelineMode !== 'overview' ? 'visible-element section-active' : 'hidden-element'}`}
                ref={svgWrapperRef}
            >
                <svg
                    viewBox="0 0 3500 200"
                    preserveAspectRatio="none"
                    className={`timeline-svg ${timelineMode !== 'overview' ? 'visible-element' : 'hidden-element'}`}
                >
                    <path
                        d={educationSegmentPathD}
                        className={`timeline-path ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
                    />
                    <path
                        d={graduationToCareerPathD}
                        className={`timeline-path ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
                        stroke="#ff4d4d"
                        strokeDasharray="8 8"
                        strokeWidth="3"
                    />
                    <path
                        d={careerSegmentPathD}
                        className={`timeline-path ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
                    />
                </svg>

                <div
                    className={`timeline-icon icon-main-education ${['education', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
                    onClick={() => {
                        if (timelineMode === 'education') {
                            setTimelineMode('overview');
                        } else if (timelineMode === 'combined') {
                            setTimelineMode('career');
                        } else {
                            setTimelineMode('combined');
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

                <div
                    className={`timeline-icon icon-main-career ${['career', 'combined'].includes(timelineMode) ? 'visible-element' : 'hidden-element'}`}
                    onClick={() => {
                        if (timelineMode === 'career') {
                            setTimelineMode('overview');
                        } else if (timelineMode === 'combined') {
                            setTimelineMode('education');
                        } else {
                            setTimelineMode('combined');
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