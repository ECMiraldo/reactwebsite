import React, { useEffect } from 'react';

const ScrollToProjects = () => {
    useEffect(() => {
        // Scroll to the "Projects" section when the component mounts
        const section = document.getElementById("Projects");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return null; // Render nothing
};

export default ScrollToProjects;