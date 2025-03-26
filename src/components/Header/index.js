import React, { useState } from "react";
import './index.css';  

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-logo">
                <h1>Logo</h1>
            </div>
            <button className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
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
                <form>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit" aria-label="Entrar">Entrar</button>
                </form>
            </div>
        </header>
    );
}

export default Header;