// src/components/Home.js
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const video = document.getElementById('background-video');
        const soundButton = document.getElementById('sound-button');

        let touchTimeout;

        const hideSpinner = () => {
            document.getElementById('loading').classList.add('hidden');
        };

        video.oncanplay = hideSpinner;

        soundButton.addEventListener('mousedown', () => {
            soundButton.classList.add('active');
            touchTimeout = setTimeout(() => {
                video.muted = false;
            }, 500);
        });

        soundButton.addEventListener('mouseup', () => {
            soundButton.classList.remove('active');
            clearTimeout(touchTimeout);
            video.muted = true;
        });

        soundButton.addEventListener('mouseleave', () => {
            soundButton.classList.remove('active');
            clearTimeout(touchTimeout);
            video.muted = true;
        });

        soundButton.addEventListener('touchstart', () => {
            soundButton.classList.add('active');
            touchTimeout = setTimeout(() => {
                video.muted = false;
            }, 500);
        });

        soundButton.addEventListener('touchend', () => {
            soundButton.classList.remove('active');
            clearTimeout(touchTimeout);
            video.muted = true;
        });

        soundButton.addEventListener('touchcancel', () => {
            soundButton.classList.remove('active');
            clearTimeout(touchTimeout);
            video.muted = true;
        });

        document.addEventListener('mousemove', (event) => {
            soundButton.style.left = `${event.clientX - soundButton.offsetWidth / 2}px`;
            soundButton.style.top = `${event.clientY - soundButton.offsetHeight / 2 - 20}px`;
        });
    }, []);

    return (
        <main>
            <section id="home" className="intro">
                <div id="loading"></div>
                <div id="video-container">
                    <video id="background-video" autoPlay loop muted playsInline>
                        <source src="/videos/video1_compressed.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div id="overlay">
                    <button id="sound-button">Mantén presionado para escuchar el sonido</button>
                </div>
                <div className="quotes">
                    <h1>1° ACADEMIA DE K-POP EN RIO CUARTO</h1>
                    <h2>Liderando el K-POP en la ciudad: tu futuro comienza hoy.</h2>
                </div>
            </section>
        </main>
    );
};

export default Home;
