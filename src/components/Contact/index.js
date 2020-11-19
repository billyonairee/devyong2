import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="body">
      <div className="body-head">
        <div className="head-title">Contact</div>
        <div className="title-line"></div>
      </div>

      <div className="contact-container">
        <div className="channel">
          <img src="logo/gmail_logo.png" alt="" />
          <a href="mailto:lyslg1018@gmail.com" target="_blank" rel="noopener noreferrer">
            <span>lyslg1018@gmail.com</span>
          </a>
        </div>
        <div className="channel">
          <img src="logo/github_logo.png" alt="" />
          <a href="https://github.com/lyslg" target="_blank" rel="noopener noreferrer">
            <span>github.com/lyslg</span>
          </a>
        </div>
        <div className="channel">
          <img src="logo/medium_logo.png" alt="" />
          <a href="https://medium.com/@lyslg1018" target="_blank" rel="noopener noreferrer">
            <span>medium.com/@lyslg1018</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
