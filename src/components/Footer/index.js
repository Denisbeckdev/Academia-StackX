import React from 'react';
import './index.css';
import githubIcon from '../assets/images/github.png'; 
import linkedinIcon from '../assets/images/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desenvolvido por Denis Beck</p>
        <div className="footer-links">
          <a 
            href="https://github.com/Denisbeckdev"  
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <img 
              src={githubIcon} 
              alt="GitHub" 
              className="footer-icon"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/denis-beck-312b0443/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;