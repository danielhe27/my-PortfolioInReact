import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// Footer component containing social media links
const Footer = () => {
    return (
        <footer>
            <div className="social-links">
                <a href="https://twitter.com/JDanielHerrera" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a href="https://github.com/danielhe27?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-herrera-a87129293/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
