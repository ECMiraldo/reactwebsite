import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import gif from '../assets/mainGif.jpg';
import About from '../components/About';
import Projects from './Projects';

const Home = () => {
  useEffect(() => {
    // Function to scroll to the section specified in the query parameter
    const scrollToSection = () => {
      const sectionToScroll = window.location.search.split('=')[1];
      if (sectionToScroll) {
        scroll.scrollTo(sectionToScroll, {
          duration: 500,
          offset: -70, // Adjust this offset if needed
          smooth: true,
        });
      }
    };

    scrollToSection();
  }, []);

  return (
    <>
      <div className='w-4/5 pt-20 m-auto'>
        <div className='w-full flex justify-center items-center m-auto'>
          <img src={gif} className='w-full' alt='loading...' />
        </div>
      </div>

      <section id='About'>
        <About />
      </section>

      <section id='Projects'>
        <Projects />
      </section>

      {/* Add more sections if needed */}
    </>
  );
};

export default Home;