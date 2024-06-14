// src/components/ProjectModal.js
import React from 'react';
import Modal from 'react-modal';
import { FaInstagram, FaTimes } from 'react-icons/fa';
import './ProjectModal.css';

Modal.setAppElement('#root');

const ProjectModal = ({ isOpen, onRequestClose, project }) => (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="Modal" overlayClassName="Overlay">
        {project && (
            <div className="modal-content">
                <button onClick={onRequestClose} className="close-button">
                    <FaTimes />
                </button>
                <h2>{project.name}</h2>
                <p>{project.date}</p>
                <div className="image-gallery">
                    {project.images ? (
                        project.images.map((image, index) => (
                            <img key={index} src={image} alt={`${project.name} ${index + 1}`} className="modal-image" />
                        ))
                    ) : (
                        <iframe
                            width="100%"
                            height="400px"
                            src={`https://www.youtube.com/embed/${project.video.split('v=')[1].split('&')[0]}`}
                            title={project.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="instagram-link">
                    <FaInstagram /> Ver en Instagram
                </a>
            </div>
        )}
    </Modal>
);

export default ProjectModal;
