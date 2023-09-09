import React from 'react';
import ReactDOM from 'react-dom';

const ProjectPopup = ({ title, onClose, children }) => {
    const portalRoot = document.getElementById('popup-root');

    return portalRoot
        ? ReactDOM.createPortal(
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative z-50">
                      <h2 className="text-2xl font-semibold text-black mb-4">{title}</h2>
                      {children}
                      <button
                          onClick={onClose}
                          className="mt-4 bg-blue-500 text-white px-4 py-2 m-auto rounded-full 
                          hover:bg-blue-600 focus:outline-none 
                          focus:ring focus:ring-blue-300"
                      >
                          Close
                      </button>
                  </div>
              </div>,
              portalRoot
          )
        : null;
};

export default ProjectPopup;