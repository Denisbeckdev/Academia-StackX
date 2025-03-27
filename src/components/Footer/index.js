import React from 'react';
import './index.css';
import githubIcon from '../assets/images/github.png';
import linkedinIcon from '../assets/images/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-credits">
          <p>Desenvolvido por Denis Beck</p>
          <div className="social-links">
            <a href="https://github.com/Denisbeckdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/denis-beck-312b0443/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
            </a>
          </div>
        </div>
        <div className="footer-location">
          <div className="footer-address">
            <h3>StackX Academia</h3>
            <p>Rua da Academia, 123</p>
            <p>Bairro da Academia</p>
            <p>São Paulo - SP</p>
          </div>
          <div className="mini-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452906!2d-46.65342658440769!3d-23.565734367638952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzU2LjYiUyA0NsKwMzknMDguOSJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              title="Localização da StackX"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;