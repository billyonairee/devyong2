import React from 'react';
import './AppLayout.scss';

const AppLayout = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/devyong2">
          DevYong2
        </a>
        <nav className="nav">
          <a className="nav-link active" href="/devyong2">
            HOME
          </a>
          <a className="nav-link" href="/devyong2/#/about">
            ABOUT
          </a>
          <a className="nav-link" href="/devyong2/#/projects">
            PROJECTS
          </a>
          <a className="nav-link" href="/devyong2/#/skills">
            SKILLS
          </a>
          <a className="nav-link" href="/devyong2/#/contact">
            CONTACT
          </a>
        </nav>
      </nav>
    </div>
  );
};

export default AppLayout;
