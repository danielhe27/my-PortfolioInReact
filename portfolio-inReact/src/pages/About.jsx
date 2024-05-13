import React from 'react';

const About = () => {
  return (
    // Main section for About page
    <section className="section">
      <div className="container">
        {/* Columns layout for content */}
        <div className="columns is-multiline is-centered">
          {/* Title */}
          <div className="column is-12">
            <h1 className="title has-text-centered">Welcome to My Portfolio</h1>
          </div>
          {/* Image  */}
          <div className="column is-6">
  <figure className="image is-328x228">
    <img className="is-rounded about-image" src="/project-images/Portfolio.jpeg" alt="Daniel Herrera" />
  </figure>
          </div>
          {/* Presentation and Skills column */}
          <div className="column is-6">
            <div className="presentation">
              {/* Name and location */}
              <h2 className="subtitle"><strong>Daniel Herrera</strong></h2>
              <p className="is-size-5"><strong>Full-Stack Developer | Based in Brooklyn, NY</strong></p>
              {/* Introduction */}
              <p className="has-text-justified">Hello! I’m Daniel, originally from Venezuela and now residing in the USA for the past three years. With a background in economics and a rapid transition into technology, I blend analytical rigor with tech prowess. My passion for technology is matched by my enthusiasm for fitness and exploring the city on runs.</p>
            </div>
            <div className="skills">
              {/* Skills section */}
              <h2 className="subtitle"><strong>Skills</strong></h2>
              <ul className="skills-list">
                <li>JavaScript, React</li>
                <li>MySQL, MongoDB</li>
                <li>Problem Solving</li>
                <li>Strong Interpersonal Skills</li>
                <li>Stress Management and Solution Finding</li>
              </ul>
            </div>
          </div>
          {/* Experience section */}
          <div className="experience">
            <p><strong>Experience:</strong></p> 
            <p>As a Junior Full-Stack Developer, I have developed and maintained robust web applications, handling both front and back-end tasks efficiently. I'm adept at working under pressure and finding solutions to complex problems.</p>
            {/* Hobbies section */}
            <p><strong>Hobbies:</strong></p>
            <p>Dedicated to maintaining a healthy lifestyle through regular workouts and enjoying runs around the city which keep me energized and clear-minded.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
