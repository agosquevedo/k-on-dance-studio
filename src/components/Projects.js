// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projects = [
    { 
        name: "WORKSHOP TRAINEE-ON I", 
        date: "16 sept 2023", 
        images: ["/images/workshop1.jpg", "/images/workshop2.jpg", "/images/workshop3.jpg", "/images/workshop4.jpg", "/images/workshop5.jpg", "/images/workshop6.jpg", "/images/workshop7.jpg", "/images/workshop8.jpg"],
        link: "https://www.instagram.com/p/Cw2mdTEuxkg/?img_index=2" 
    },
    { 
        name: "SHOW DE FIN DE AÑO", 
        date: "14 dec 2023", 
        images: ["/images/show1.jpg", "/images/show2.jpg", "/images/show3.jpg", "/images/show4.jpg"],
        link: "https://www.instagram.com/p/C18EKg1M5EL/" 
    },
    { 
        name: "PARTICIPACIÓN CAF", 
        date: "19 may 2024", 
        images: ["/images/caf1.jpg", "/images/caf2.jpg", "/images/caf3.jpg", "/images/caf4.jpg"],
        link: "https://www.instagram.com/p/C7Pcz9yOW7c/" 
    },
    { 
        name: "SESIÓN PROMOCIÓN DE CLASES", 
        date: "4 jun 2024", 
        images: ["/images/0.jpg", "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/6.png", "/images/7.png", "/images/8.png"],
        link: "https://www.instagram.com/p/C7z7vanAEv6/?img_index=2" 
    },
    { 
        name: "Kpop In Public", 
        date: "25 jul 2023", 
        video: "https://www.youtube.com/watch?app=desktop&v=zQCA9TZlP9Q&fbclid=PAAabs9aRxvwbQJg-bGkrTA72dDZgC8e9i24CKRFKjhPMOBZA8lT7w6HO1_7c&ab_channel=K-ONDANCESTUDIO",
        link: "https://www.instagram.com/kondancestudio"
    },
    { 
        name: "4 dic 2023", 
        date: "4 dec 2023", 
        video: "https://www.youtube.com/watch?v=uSBOS5cY-CE&ab_channel=K-ONDANCESTUDIO",
        link: "https://www.instagram.com/kondancestudio"
    },
    { 
        name: "24 dic 2023", 
        date: "24 dec 2023", 
        video: "https://www.youtube.com/watch?v=h9LiauPGY4s&ab_channel=K-ONDANCESTUDIO",
        link: "https://www.instagram.com/kondancestudio"
    }
];

// Convert date strings to Date objects for comparison
const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split(' ');
    return new Date(`${year}-${month}-${day}`);
};

// Sort projects by date
projects.sort((a, b) => formatDate(a.date) - formatDate(b.date));

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <main>
            <section className="projects">
                <h2>Proyectos</h2>
                <div className="gallery">
                    {projects.map((project, index) => (
                        <div className="gallery-item" key={index} onClick={() => openModal(project)}>
                            {project.images ? (
                                <img src={project.images[0]} alt={project.name} className="gallery-image" />
                            ) : (
                                <iframe
                                    width="250"
                                    height="150"
                                    src={`https://www.youtube.com/embed/${project.video.split('v=')[1].split('&')[0]}`}
                                    title={project.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="gallery-video"
                                ></iframe>
                            )}
                            <div className="overlay">
                                <div className="text">
                                    <h3>{project.name}</h3>
                                    <p>{project.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <ProjectModal isOpen={modalIsOpen} onRequestClose={closeModal} project={selectedProject} />
            </section>
        </main>
    );
};

export default Projects;
