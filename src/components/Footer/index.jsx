import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.css";
import ContactForm from "./ContactForm";
import ContactIcon from "../../images/svg-3.svg";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footerContainer" id="contact">
      <div className="footerWrap">
        <ContactForm />
        <div className="footerSvgWrapper">
          <img src={ContactIcon} alt="contacticon" className="contactIcon" />
        </div>
      </div>
      <div className="socialMedia">
        <div className="socialMediaWrap">
          <Link to="home" className="socialLogo" onClick={toggleHome}>
            Vishal Shah
          </Link>
          <div className="websiteRights">
            Vishal &copy; {new Date().getFullYear()}&nbsp; All rights reserved.
          </div>
          <div className="socialIcons">
            <a
              href="https://www.linkedin.com/in/vishal-shah-4882a11b7/"
              target="_blank"
              aria-label="LinkedIn"
              className="socialIconLinks"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/vishal-63"
              target="_blank"
              aria-label="Github"
              className="socialIconLinks"
            >
              <FaGithub />
            </a>
            <a
              href="/"
              target="_blank"
              aria-label="Instagram"
              className="socialIconLinks"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              target="_blank"
              aria-label="Twitter"
              className="socialIconLinks"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              target="_blank"
              aria-label="Facebook"
              className="socialIconLinks"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
