import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    // <div className="bg">
    //   <div className="intro">
    //     <div>Hello, I'm Yong seok;</div>
    //     <div>Java Script Developer;</div>
    //   </div>
    // </div>
    <div className="home">
      <div className="home-container">
        <div className="title">
          <div>Hello🖐,</div>
          <div>I’m YONG SEOK.</div>
          <div>JavaScript Developer.</div>
        </div>
      </div>
      {/* <Container className="home-container">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="title">
              <div>Hello🖐,</div>
              <div>I’m YONG SEOK.</div>
              <div>JavaScript Developer.</div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
    // <div class="bg">
    //   <img src="/home.png" alt="" />
    //   <div class="content">
    //     <div>Hello, I'm Yong seok;</div>
    //     <div>Java Script Developer;</div>
    //   </div>
    // </div>
  );
};

export default Home;
