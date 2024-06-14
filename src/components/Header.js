// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <div className="logo-container">
            <Link to="/">
                <img src="/images/logo_solo.png" alt="K-ON Dance Studio Logo" className="logo" />
                <img src="/images/titulo.png" alt="K-ON Dance Studio Title" className="logo-title" />
            </Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/classes">Clases</Link></li>
                <li><Link to="/groups">Grupos</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li> 
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
