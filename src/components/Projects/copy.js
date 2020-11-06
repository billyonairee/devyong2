import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import './Projects.scss';

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="body">
      <div className="body-head">
        <div className="head-title">Projects</div>
        <div className="title-line"></div>
      </div>

      <div className="projects-container">
        <div className="project-list">
          <div className="project">
            <div className="contents">
              <div>포트폴리오 페이지</div>
              <div>포트폴리오 페이지</div>
              <div>포트폴리오 페이지</div>
              <div>포트폴리오 페이지</div>
            </div>
            <div className="carousel-box">
              <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="portfolio/portfolio_1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="portfolio/portfolio_2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="portfolio/portfolio_1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// devyong2/portfolio/portfolio.png
