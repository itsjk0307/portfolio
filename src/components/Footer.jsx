import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../style/footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-icon footer-icons">
        <a href="mailto:itsjk03.com">
          <HiMail></HiMail>
        </a>
        <a href="https://www.linkedin.com/in/jamshid-khaytbaev-684363207/">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/itsjk0307">
          <FaGithub></FaGithub>
        </a>
      </div>
      <div className="nav footer-links">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          className={"navbar-link"}
        >
          Home
        </Link>{" "}
        <Link
          to="About"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          className={"navbar-link"}
        >
          About
        </Link>{" "}
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1500}
          className={"navbar-link"}
        >
          Projects
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          className={"navbar-link"}
        >
          Skills
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          className={"navbar-link"}
        >
          Contact
        </Link>
      </div>
      <div className="others">
        <span>01098021777</span>
        <span>JAMSHID © 2023</span>
      </div>
    </div>
  );
};

export default Footer;
