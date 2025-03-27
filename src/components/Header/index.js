import React, { useState } from "react";
import './index.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // Estado do popup

    return (
        <header className="header">
            <div className="header-logo">
                <h1>Logo</h1>
            </div>
            
            <button 
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            
            <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#stackx">A StackX</a></li>
                    <li><a href="#unidades">Unidades</a></li>
                    <li><a href="#programas">Programas</a></li>
                </ul>
            </nav>
            
            <div className="header-login">
                <button 
                    className="matricule-se-btn"
                    onClick={() => setShowPopup(true)} // Abre o popup
                >
                    Matricule-se!
                </button>
                
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h3>...</h3>
                            <p>Formulário de matrícula...</p>
                            <button 
                                className="fechar-btn"
                                onClick={() => setShowPopup(false)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;