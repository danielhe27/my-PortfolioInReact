import React from 'react';

const PortfolioPage = () => {
    const projects = [
        { id: 1, title: 'PWA-WebFlow', description: 'Progressive web application', image: '../src/assets/pwa.jpeg', link: 'https://github.com/danielhe27/PWA-WebFlow' },
        { id: 2, title: 'Blogspot-MVC', description: 'Model-View-Controller', image: '../src/assets/mvc.jpeg', link: 'https://github.com/danielhe27/blogspot-mvc' },
        { id: 3, title: 'note-storage', description: 'Create and store notes', image: '../src/assets/notecreator.jpeg', link: 'https://github.com/danielhe27/note-storage' },
        { id: 4, title: 'movie-decision-maker', description: 'Omdb Api helps with  choosing a movie  ', image: '../src/assets/movie-desicion.jpeg', link: 'https://github.com/danielhe27/movie-decision-maker/tree/main' },
        { id: 5, title: 'ChronoSaver', description: 'Time management web application', image: '../src/assets/chronosaver.jpeg', link: 'https://github.com/danielhe27/chronosaver' },
        { id: 6, title: 'web-based quiz application', description: 'trivia', image: '../src/assets/quiz.jpeg', link: 'https://github.com/danielhe27/SqueezyQuiz' },
    ];

    return (
        <div className="cards-container">
            <h1 className="title has-text-centered mt-6">My Portfolio</h1>
            <div className="columns is-centered is-multiline">
                {projects.map(project => (
                    <div key={project.id} className="column is-one-third">
                        <div className="card has-shadow has-text-centered">
                            <div className="card-image-container">
                                <img src={project.image} alt={project.title} className="card-image" />
                                <div className="card-content-overlay">
                                    <a href={project.link} className="button is-primary is-rounded">View Project</a>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="title is-5">{project.title}</p>
                                <p className="subtitle is-6">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioPage;
