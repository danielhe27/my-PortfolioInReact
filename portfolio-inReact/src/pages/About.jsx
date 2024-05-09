import React from 'react';

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-centered">
          <div className="column is-12">
            <h1 className="title has-text-centered">Welcome to My Portfolio</h1>
          </div>
          <div className="column is-6">
            <figure className="image is-328x228">
              <img className="is-rounded about-image" src="/src/assets/Portfolio.jpeg" alt="Daniel Herrera" />
            </figure>
          </div>
          <div className="column is-6">
            <div className="content">
              <h2 className="subtitle">Daniel Herrera</h2>
              <p className="is-size-5">Full-Stack Developer | Based in Brooklyn, NY</p>
              <p className="has-text-justified">Hello! I’m Daniel, originally from Venezuela and now residing in the USA for the past three years. With a background in economics and a rapid transition into technology, I blend analytical rigor with tech prowess. My passion for technology is matched by my enthusiasm for fitness and exploring the city on runs.</p>
              
              <h2 className="subtitle">Skills</h2>
              <ul className="skills-list">
                <li>JavaScript, React</li>
                <li>MySQL, MongoDB</li>
                <li>Problem Solving</li>
                <li>Strong Interpersonal Skills</li>
                <li>Stress Management and Solution Finding</li>
              </ul>
              <div className="content">
                <p><strong>Experience:</strong> As a Junior Full-Stack Developer, I have developed and maintained robust web applications, handling both front and back-end tasks efficiently. I'm adept at working under pressure and finding solutions to complex problems.</p>
                <p><strong>Hobbies:</strong> Dedicated to maintaining a healthy lifestyle through regular workouts and enjoying runs around the city which keep me energized and clear-minded.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
