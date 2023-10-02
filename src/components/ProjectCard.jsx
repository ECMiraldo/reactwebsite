// import React, { useState } from 'react';
// import ProjectPopup from './ProjectPopUp';

// const ProjectCard = ({ imageSrc, title, bulletPoints, Popup }) => {


//     const [isPopupOpen, setIsPopupOpen] = useState(false);

//     const togglePopup = () => {
//         setIsPopupOpen(!isPopupOpen);
//     };



//     return (
//         <div className='relative group'>
//             <h2 className='text-2xl font-semibold text-color-texts text-center underline decoration-solid pb-2'>{title}</h2>

//             <img src={imageSrc} alt="loading..." className='w-full h-auto' />

//             <div className='absolute top-0 left-0 w-full h-full bg-white opacity-0 
//             hover:opacity-90 transition-opacity duration-300 ease-in-out p-4'>

//                 <h2 className='text-2xl font-semibold text-black text-center underline decoration-solid'>{title}</h2>
//                 <ul className='px-3 mt-2 text-black '>
//                     {bulletPoints.map((point, index) => (
//                         <li key={index} className='list-disc text-black'> {point}</li>
//                     ))}
//                 </ul>
//                 <button 
//                     onClick={togglePopup}
//                     className="mt-14 bg-blue-500 text-color-texts px-4 py-2 rounded-full justify-
//                     hover:bg-blue-600 focus:outline-none 
//                     focus:ring focus:ring-blue-300 "
//                     style={{ opacity: 1 }}
//                 >
//                     Read More
//                 </button>
//                 {isPopupOpen && Popup && (
//                     <Popup
//                         title={title}
//                         bulletPoints={bulletPoints}
//                         onClose={togglePopup}
//                     />
//                 )}
                
//             </div>
//         </div>
//     );
// }

// export default ProjectCard;



import React, { useState } from 'react';
import ProjectPopup from './ProjectPopUp';
import Tag from '../components/Tag';

const ProjectCard = ({ imageSrc, title, bulletPoints, Popup, tags }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className='relative group' >
            <div
                className='cursor-pointer'
                onClick={(e) => {
                    // Prevent the click event from propagating to the parent div
                    e.stopPropagation();
                }}
                >
                <div className="flex flex-col items-center">
                    <div className="flex-grow flex flex-col justify-center h-20 overflow-hidden"> {/* Fixed height for title */}
                        <h2 className='text-2xl font-montserrat text-color-texts text-center pb-2'>
                            {title}
                        </h2>
                    </div>
                    <img
                        src={imageSrc}
                        alt="loading..."
                        className='w-full h-auto'
                        onClick={togglePopup}
                    />
                </div>
                {tags && (
                    <div className='flex flex-start flex-wrap items-start mt-4 space-x-2 '>
                        {tags.map((tag, index) => (
                            <Tag
                                key={index}
                                text={tag.text}
                                color={tag.color}
                                icon={tag.icon}
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* Open the PopUp when 'isPopupOpen' is true */}
            {isPopupOpen && Popup && (
                <ProjectPopup title={title} onClose={togglePopup}>
                    {/* Place your PopUp content here */}
                </ProjectPopup>
            )}
        </div>
    );
};

export default ProjectCard;