import React from 'react';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };

  const navigate = useNavigate(); // Get

  const handleNavLinkClick = (targetId) => {
    navigate('/'); // Navigate to the home page first
    setTimeout(() => {
      // After a short delay, scroll to the specified section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust the delay as needed
  };



  return (
    <nav>
      <div className='nav_container'>
        <div className='font-montserrat nav_logo' onClick={scrollToTop}>
          Eduardo Cacciari Miraldo
        </div>
        <ul className='font-montserrat nav_links'>
          <li>
            {/* Use Link from React Scroll for smooth scrolling to "About" section */}
            <Link to="Home  " smooth={true} duration={500} onClick={() => handleNavLinkClick('Home')}>
            
              Home
            </Link>
          </li>
          <li>
            {/* Use Link from React Scroll for smooth scrolling to "Projects" section */}
            <Link to="Projects" smooth={true} duration={500} onClick={() => handleNavLinkClick('Projects')}>
              Projects
            </Link>
          </li>
          <li>
            {/* Use React Router Link to navigate to a different component */}
            <RouterLink to="/resume">Resume/Contacts</RouterLink>
          </li>
          {/* Add more links */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;