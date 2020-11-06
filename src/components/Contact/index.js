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
          <span>lyslg1018@gmail.com</span>
        </div>
        <div className="channel">
          <a
            href="https://github.com/lyslg"
            target="_blank"
            rel="noopener noreferrer">
            <img src="logo/github_logo.png" alt="" />
          </a>
          <span>github.com/lyslg</span>
        </div>
        <div className="channel">
          <a
            href="https://medium.com/@lyslg1018"
            target="_blank"
            rel="noopener noreferrer">
            <img src="logo/medium_logo.png" alt="" />
          </a>
          <span>medium.com/@lyslg1018</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
