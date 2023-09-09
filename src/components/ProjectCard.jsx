import React, { useState } from 'react';
import ProjectPopup from './ProjectPopUp';

const ProjectCard = ({ imageSrc, title, bulletPoints, Popup }) => {


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };



    return (
        <div className='relative group'>
            <img src={imageSrc} alt="loading..." className='w-full h-auto' />

            <div className='absolute top-0 left-0 w-full h-full bg-white opacity-0 
            hover:opacity-90 transition-opacity duration-300 ease-in-out p-4'>

                <h2 className='text-2xl font-semibold text-black'>{title}</h2>
                <ul className='list-disc mt-2 text-black'>
                    {bulletPoints.map((point, index) => (
                        <li key={index} className='text-black'> {point}</li>
                    ))}
                </ul>
                <button 
                    onClick={togglePopup}
                    className="mt-14 bg-blue-500 text-color-texts px-4 py-2 rounded-full 
                    hover:bg-blue-600 focus:outline-none 
                    focus:ring focus:ring-blue-300 "
                    style={{ opacity: 1 }}
                >
                    Read More
                </button>
                {isPopupOpen && Popup && (
                    <Popup
                        title={title}
                        bulletPoints={bulletPoints}
                        onClose={togglePopup}
                    />
                )}
                
            </div>
        </div>
    );
}

export default ProjectCard;