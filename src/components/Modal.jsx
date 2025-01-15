import React from "react";
import { FaTimes } from "react-icons/fa";
import "../App.css";

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;
  
    return (
       
      <div className={`modal-container ${isOpen ? 'active' : ''}`}>
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
        <div className="testimonials-modal">
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes/>
          </button>
          
          <div className="modal-avatar-box">
            <img src={project?.image} alt="avatar" />
          </div>
  
          <div className="modal-content">
            <h2 className="modal-title">{project?.title}</h2>
            {project?.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              View Project
            </a>
          )}
            <p
            className="modal-description"
            dangerouslySetInnerHTML={{ __html: project?.FullDes }}
          ></p>
          </div>
        </div>
      </div>
 
    );
  };
  
  export default Modal;