// src/components/Groups.js
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Groups.css'; // Import additional styles for this component

const Groups = () => {
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
            },
            centeredSlides: true,
            slidesPerView: 'auto',
        });
    }, []);

    const groups = [
        { name: "Universe", description: "A vibrant group full of energy", image: "/images/universe.jpg", logo: "/images/universe-logo.png", link: "https://www.instagram.com/universekcrew/" },
        { name: "Galaxies", description: "Exploring new dance dimensions", image: "/images/galaxies.jpg", logo: "/images/galaxies-logo.png", link: "https://www.instagram.com/thenewgalaxies/" },
        { name: "Crying in a Fantasy", description: "An emotional dance journey", image: "/images/cif.jpg", logo: "/images/cif-logo.png", link: "https://www.instagram.com/cryinginafantasy/" },
        { name: "Conspace", description: "Dance in the contemporary space", image: "/images/conspace.jpg", logo: "/images/conspace-logo.png", link: "https://www.instagram.com/conspace.dc/" },
    ];

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <main>
            <section id="groups" className="groups">
                <div className="video-container">
                    <video autoPlay loop muted playsInline>
                        <source src="/path_to_your_video.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h2>Grupos</h2>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {groups.map((group, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="group-card" onClick={() => handleClick(group.link)}>
                                    <img src={group.image} alt={group.name} className="group-image" />
                                    <h3>{group.name}</h3>
                                    <p>{group.description}</p>
                                    <img src={group.logo} alt={`${group.name} logo`} className="group-logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </main>
    );
};

export default Groups;
