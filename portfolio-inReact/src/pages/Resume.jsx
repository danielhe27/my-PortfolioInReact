import React from 'react';
import '../resume.css'; 
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header">
        <h1 className="name">Daniel Herrera</h1>
        <p className="contact-info">Brooklyn, NY | jdah49d@gmail.com</p>
      </div>

      <p className="resume-link">
        <a href="../src/assets/resume/resume.pdf" download>
          Download My Resume
          <FontAwesomeIcon icon={faDownload} className="ml-2" />
        </a>
      </p>
      
      <div className="container">
        <section className="section">
          <h2 className="title is-2">Professional Experience</h2>
          <div className="box">
            <h3 className="title is-3">Frontend Development Intern</h3>
            <p className="subtitle">Remote | Structured Learning</p>
            <p>December 2023 - June 2024</p>
            <div>
              <h4 className="title is-4">Responsibilities and Achievements:</h4>
              <ul>
                <li>Completed a comprehensive curriculum covering HTML, CSS, JavaScript, and React.</li>
              </ul>
            </div>
            <div>
              <h4 className="title is-4">Project Highlights:</h4>
              <ul>
                <li>Led the development of a full-stack project management application using the MERN stack.</li>
                <li>Interactive Full-Stack Project </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className="title is-2">Education</h2>
          <div className="box">
            <h3 className="title is-3">Full Stack Developer Boot Camp</h3>
            <p className="subtitle">Columbia University | 2024</p>
          </div>
          <div className="box">
            <h3 className="title is-3">Bachelor of Economics</h3>
            <p className="subtitle">La Universidad de los Andes, Venezuela | 2019</p>
          </div>
        </section>
        <section className="section">
          <h2 className="title is-2">Skills</h2>
          <div className="tags are-medium">
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">SQL</span>
            <span className="tag">Git</span>
            <span className="tag">Responsive Web Design</span>
            <span className="tag">UI/UX Design</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Agile Methodologies</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
