import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <footer className="flex-row justify-center align-center px-2">
            <a href="https://github.com/krutipatel07" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} className="mr-1" />
            </a>
            <a href="https://www.linkedin.com/in/valbona-bajrami/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
            </a>
        </footer>
    )
}

export default footer;