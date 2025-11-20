import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub,   BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Abhishek Yadav. I am a Full-Stack Developer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/abhi2J4" target="black">
          <BsGithub />
        </a>
        <a href="https://leetcode.com/u/abhishekyadav3363/" target="black">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/_jacky_a_j/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-yadav-4a0835283/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
