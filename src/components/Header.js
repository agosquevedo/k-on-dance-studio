// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
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
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/classes" onClick={toggleMenu}>Clases</Link></li>
                    <li><Link to="/groups" onClick={toggleMenu}>Grupos</Link></li>
                    <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
