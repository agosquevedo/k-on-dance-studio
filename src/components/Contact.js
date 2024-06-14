// src/components/Contact.js
import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contacto = () => {
    return (
        <main>
            <section className="contacto">
                <h2>Contacto</h2>
                <p>Puedes contactarnos a través de WhatsApp o Instagram:</p>
                <div className="icon-container">
                    <a href="https://wa.me/5493584257663" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/kondancestudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contacto;
