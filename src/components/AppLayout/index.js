import React from 'react';
import './AppLayout.scss';

const AppLayout = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          DevYong2
        </a>
        <nav className="nav">
          <a className="nav-link active" href="/">
            HOME
          </a>
          <a className="nav-link" href="/about">
            ABOUT
          </a>
          <a className="nav-link" href="/projects">
            PROJECTS
          </a>
          <a className="nav-link" href="/skills">
            SKILLS
          </a>
          <a className="nav-link" href="/contact">
            CONTACT
          </a>
        </nav>
      </nav>
    </div>
  );
};

export default AppLayout;
