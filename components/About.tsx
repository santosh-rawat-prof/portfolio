"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import "./style.css";
import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Vortex } from "./ui/VortexBackground";

const About = () => {
  useEffect(() => {
    var typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "UI/UX Designer",
        "Software Engineer",
        "Frontend Developer",
        "Web Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Vortex backgroundColor="transparent">
        <section className="home" id="about">
          <div className="home-content">
            <h3>Hello, It&apos;s Me</h3>
            <h1>Santosh Kumar Raut</h1>
            <h3>
              And I&apos;m a <span className="multiple-text"></span>
            </h3>
            <p>
              I am Frontend Developer experience in Creating Professional,
              Modern Websites. Building Full stack Web Application with User
              Authentication and Payment Gateway and All Features that You can
              Imagine!
            </p>

            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/santosh-rawat-prof/"
                target="blank"
                // style={{ "--i": 7 }}
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/santosh-rawat-prof/"
                target="blank"
                // style={{ "--i": 8 }}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/_JaiswalSantosh"
                target="blank"
                // style={{ "--i": 9 }}
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://linktr.ee/santosh-rawat-prof"
                target="blank"
                // style={{ "--i": 10 }}
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
            </div>
            <a
              href="/resume.pdf"
              className="btn"
              download
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="home-image">
            <img src={"/santosh.png"} alt="Hero Image" />
          </div>
        </section>
      </Vortex>
    </div>
  );
};

export default About;
