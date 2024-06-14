// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuClick = () => {
        setIsMobile(!isMobile);
    };

    const closeMobileMenu = () => {
        setIsMobile(false);
    };

    return (
        <header>
            <div className="logo-container">
                <Link to="/" onClick={closeMobileMenu}>
                    <img src="/images/logo_solo.png" alt="K-ON Dance Studio Logo" className="logo" />
                    <img src="/images/titulo.png" alt="K-ON Dance Studio Title" className="logo-title" />
                </Link>
            </div>
            <nav>
                <div className="mobile-menu-icon" onClick={handleMenuClick}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                    <li><Link to="/classes" onClick={closeMobileMenu}>Clases</Link></li>
                    <li><Link to="/groups" onClick={closeMobileMenu}>Grupos</Link></li>
                    <li><Link to="/projects" onClick={closeMobileMenu}>Proyectos</Link></li> 
                    <li><Link to="/contact" onClick={closeMobileMenu}>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
