import React from "react";
import footerBg from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer className="p-10 bg-cover bg-center" style={{backgroundImage: `url(${footerBg})`}}>
      <div className="footer justify-between px-5">
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </div>
      <div className="text-center mt-20">
        <p>Copyright © 2023 - All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
