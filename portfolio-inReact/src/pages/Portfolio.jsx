import React from 'react';

const PortfolioPage = () => {
    // Array of projects with their details
    const projects = [
        {
            id: 1,
            title: 'PWA-WebFlow',
            description: 'Progressive web application',
            image: '/project-images/pwa.jpeg',
            link: 'https://github.com/danielhe27/PWA-WebFlow',
            deploy: 'https://rocky-wildwood-58113-0dc7f9910c44.herokuapp.com'
        },
        {
            id: 2,
            title: 'Blogspot-MVC',
            description: 'Model-View-Controller',
            image: '/project-images/mvc.jpeg',
            link: 'https://github.com/danielhe27/blogspot-mvc',
            deploy: 'https://secure-earth-02146-fc74d51ab940.herokuapp.com'
        },
        {
            id: 3,
            title: 'note-storage',
            description: 'Create and store notes',
            image: '/project-images/notecreator.jpeg',
            link: 'https://github.com/danielhe27/note-storage',
            deploy: 'https://note-storage-8c599a9c6b47.herokuapp.com/notes'
        },
        {
            id: 4,
            title: 'movie-decision-maker',
            description: 'Omdb Api helps with choosing a movie',
            image: '/project-images/movie-desicion.jpeg',
            link: 'https://github.com/danielhe27/movie-decision-maker/tree/main',
            deploy: 'https://danielhe27.github.io/movie-decision-maker/'
        },
        {
            id: 5,
            title: 'ChronoSaver',
            description: 'Time management web application',
            image: '/project-images/chronosaver.jpeg',
            link: 'https://github.com/danielhe27/chronosaver',
            deploy: 'https://danielhe27.github.io/chronosaver/'
        },
        {
            id: 6,
            title: 'web-based quiz application',
            description: 'trivia',
            image: '/project-images/quiz.jpeg',
            link: 'https://github.com/danielhe27/SqueezyQuiz',
            deploy: 'https://danielhe27.github.io/SqueezyQuiz/'
        },
    ];
    

    return (
        // Main container for the portfolio section
        <div className="cards-container">
            {/* Portfolio title */}
            <h1 className="title has-text-centered mt-6">My Portfolio</h1>
            {/* Columns layout for projects */}
            <div className="columns is-centered is-multiline">
                {/* Mapping through each project and rendering a card */}
                {projects.map(project => (
                    <div key={project.id} className="column is-one-third">
                        {/* Card for each project */}
                        <div className="card has-shadow has-text-centered">
                            {/* Card image container */}
                            <div className="card-image-container">
                                <img src={project.image} alt={project.title} className="card-image" />
                                {/* Overlay for project links */}
                                <div className="card-content-overlay">
                                    {/* Link to view project source code */}
                                    <a href={project.link} className="button is-primary is-rounded">View Project</a>
                                    {/* Link to view deployed app */}
                                    <a href={project.deploy} className="button is-primary is-rounded">View my Deploy App</a>
                                </div>
                            </div>
                            {/* Card content with project title and description */}
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
