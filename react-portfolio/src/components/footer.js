import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <footer className="flex-row justify-center align-center px-2">
            <div className="container text-center mt-4">
            <div>
  <a href="https://github.com/valbona1992" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} className="m-2" /> 
            </a>
            <a href="https://www.linkedin.com/in/valbona-bajrami/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="m-2" />
            </a>
</div>

  
</div>
           
        
        </footer>

    )
}

export default footer;