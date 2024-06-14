import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src="/images/logo_solo.png" alt="K-ON Dance Studio Logo" className="logo" />
                    <img src="/images/titulo.png" alt="K-ON Dance Studio Title" className="logo-title" />
                </Link>
            </div>
            <nav>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/classes">Clases</Link></li>
                    <li><Link to="/groups">Grupos</Link></li>
                    <li><Link to="/proyectos">Proyectos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <div className="burger" onClick={handleToggle}>
                    ☰
                </div>
            </nav>
        </header>
    );
};

export default Header;
