import React, { useState } from "react";
import './index.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <header className="header">
            <div className="header-logo">
                <h1>Logo</h1>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
            >
                ☰
            </button>

            <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#stackx">A StackX</a></li>
                    <li><a href="#unidades">Serviços</a></li>
                    <li><a href="#programas">Programas</a></li>
                </ul>
            </nav>

            <div className="header-login">
                <button
                    className="matricule-se-btn"
                    onClick={() => setShowPopup(true)}
                    aria-label="Matricule-se"
                >
                    Matricule-se!
                </button>

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <button
                                className="close-btn"
                                onClick={() => setShowPopup(false)}
                                aria-label="Fechar"
                            >
                                ✖
                            </button>
                            <h3>Cadastro</h3>
                            <form>
                                <input type="text" placeholder="Nome" required />
                                <input type="number" placeholder="Idade" min="15" required />
                                <input type="date" required />
                                <input type="text" placeholder="CPF" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2}|\d{11})" required />
                                <input type="email" placeholder="E-mail" required />
                                <input type="tel" placeholder="Telefone" required />

                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name="genero" value="homem" required /> Homem
                                    </label>
                                    <label>
                                        <input type="radio" name="genero" value="mulher" required /> Mulher
                                    </label>
                                    <label>
                                        <input type="radio" name="genero" value="outro" required /> Outro
                                    </label>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;