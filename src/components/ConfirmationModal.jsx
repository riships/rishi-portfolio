import React, { useEffect } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import '../assets/styles/ConfirmationModal.css';

function ConfirmationModal({ isOpen, type = 'success', title, message, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className={`modal-card ${isSuccess ? 'success' : 'error'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <FaTimes />
        </button>

        <div className="modal-icon-wrapper">
          {isSuccess ? <FaCheckCircle /> : <FaExclamationTriangle />}
        </div>

        <h3 className="modal-title">
          {title || (isSuccess ? 'Message Sent Successfully!' : 'Failed to Send')}
        </h3>

        <p className="modal-message">
          {message}
        </p>

        <button className="modal-action-btn" onClick={onClose}>
          {isSuccess ? 'Got It' : 'Try Again'}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
