import React, { useState } from 'react';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>StackX</h1>
      </div>

      <button 
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
      >
        ☰
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><button onClick={() => scrollTo('about')}>A StackX</button></li>
          <li><button onClick={() => scrollTo('services')}>Serviços</button></li>
          <li><button onClick={() => scrollTo('programs')}>Programas</button></li>
        </ul>
      </nav>

      <button 
        className="cta-button"
        onClick={() => scrollTo('programs')}
      >
        Matricule-se!
      </button>
    </header>
  );
};

export default Header;