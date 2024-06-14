// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contacto = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                name,
                email,
                message,
            },
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((response) => {
                setStatus('Message Sent Successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                setStatus('Failed to send message.');
            });
    };

    return (
        <main>
            <section className="contacto">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Mensaje</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </section>
        </main>
    );
};

export default Contacto;
