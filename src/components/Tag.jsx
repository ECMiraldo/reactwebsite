import React from 'react';
import icon from '../assets/tag.png';
const colors = require('tailwindcss/colors')


const Tag = ({ text, color }) => {

    const tagStyle = {
        backgroundColor: color,
      };


    return (
        <div className={`inline-flex items-center justify-self-start ml-1 mb-1 space-x-1 p-1 rounded-full text-white`} style={tagStyle}>
            <img src={icon} className="w-4 h-4 m-1" alt="" /> 
            <span className='font-montserrat pr-2'>{text}</span>
        </div>
    );
};

export default Tag;