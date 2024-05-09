import React from 'react';
import '../resume.css'; // Import your CSS file for styling

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="header">
                <h1 className="name">Your Name</h1>
                <p className="contact-info">Your Address | Your Email | Your Phone Number</p>
            </div>
            <div className="section">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience">
                    <h3 className="position">Frontend Development Intern</h3>
                    <p className="company">Self-paced Learning | Remote</p>
                    <p className="duration">January 2023 - November 2023</p>
                    <div className="responsibilities">
                        <h4>Responsibilities and Achievements:</h4>
                        <ul>
                            <li>Completed a comprehensive curriculum covering various aspects of web development, including HTML, CSS, JavaScript, and modern frontend frameworks like React.</li>
                            {/* Add other responsibilities and achievements */}
                        </ul>
                    </div>
                    <div className="projects">
                        <h4>Project Highlights:</h4>
                        <ul>
                            <li>Led the development of a full-stack project management application using the MERN (MongoDB, Express.js, React, Node.js) stack, demonstrating end-to-end proficiency in web application development.</li>
                            {/* Add other project highlights */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section">
                <h2 className="section-title">Education</h2>
                <div className="education">
                    <h3 className="degree">Bachelor of Science in Computer Science</h3>
                    <p className="university">University Name | Graduation Year</p>
                </div>
            </div>
            <div className="section">
                <h2 className="section-title">Skills</h2>
                <div className="skills">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Git</li>
                        <li>Responsive Web Design</li>
                        <li>UI/UX Design</li>
                        <li>Problem Solving</li>
                        <li>Agile Methodologies</li>
                    </ul>
                </div>
            </div>
            </div>
    );
}

export default Resume;
