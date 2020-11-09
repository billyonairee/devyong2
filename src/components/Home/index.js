import React from 'react';
import './Home.scss';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="title">
            <div>Hello🖐,</div>
            <div>I’m YONG SEOK.</div>
            <div>JavaScript Developer.</div>
          </div>
        </div>
      </div>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
