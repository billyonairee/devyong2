import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './AppLayout.scss';

const AppLayout = () => {
  return (
    <>
      <div className="header">
        <Navbar bg="white">
          <Navbar.Brand href="/devyong2">
            <img
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            DevYong2
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link href="/devyong2/#/">View</Nav.Link>
            <Nav.Link href="/devyong2/#/about">About</Nav.Link>
            <Nav.Link href="/devyong2/#/projects">Projects</Nav.Link>
            <Nav.Link href="/devyong2/#/skills">Skills</Nav.Link>
            <Nav.Link href="/devyong2/#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default AppLayout;
