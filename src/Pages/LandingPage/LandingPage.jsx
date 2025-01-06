import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import "./LandingPage.css";
import pineTree from "../../assets/pine_tree.png";
import leaf from "../../assets/leaf.svg";
import cloud from "../../assets/cloud.png";
import cloudL from "../../assets/cloud-l.png";
import certificatePdf from "../../../public/Adarsh_Certificate.pdf";
function LandingPage() {
  const [text, setText] = useState("");

  const fullText = "Hello, I'm Adarsh.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text !== fullText) {
        setText(text + fullText[text.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 400);
    return () => clearInterval(intervalId);
  }, [text, fullText]);

  return (
    <div className="main landing-main" id="landing">
      <div className="greet-text">
        <div className="quote-text">
          <div className="quote-icon">
            <svg
              width="34px"
              height="34px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#69aa61"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.62231 6.78278C10.0546 6.43909 10.1265 5.81001 9.78277 5.3777C9.43908 4.94539 8.81001 4.87354 8.37769 5.21724C4.73471 8.11342 4 11.8784 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C10 14.3432 8.65685 13 7 13C6.71233 13 6.43412 13.0405 6.17076 13.1161C6.5162 10.5872 7.45738 8.50391 9.62231 6.78278ZM20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 11.8784 14.7347 8.11342 18.3777 5.21724C18.81 4.87354 19.4391 4.94539 19.7828 5.3777C20.1265 5.81001 20.0546 6.43909 19.6223 6.78278C17.4574 8.50391 16.5162 10.5872 16.1708 13.1161C16.4341 13.0405 16.7123 13 17 13C18.6569 13 20 14.3432 20 16Z"
                  fill="#69aa61"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="quote-h1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
            >
              {text}
            </motion.h1>
          </div>
          <motion.div
            className="quote-emoji"
            initial={{ scale: 3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.7, duration: 1 }}
          >
            <span>
              <svg
                width="44px"
                height="64px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--emojione"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="#42ade2">
                    {" "}
                    <path d="M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1">
                      {" "}
                    </path>{" "}
                    <path d="M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2">
                      {" "}
                    </path>{" "}
                    <path d="M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9">
                      {" "}
                    </path>{" "}
                    <path d="M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <g fill="#ffdd67">
                    {" "}
                    <path d="M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9">
                      {" "}
                    </path>{" "}
                    <path d="M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <path
                    d="M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2"
                    fill="#eba352"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7"
                    fill="#ffdd67"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1"
                    fill="#eba352"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6"
                    fill="#ffdd67"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#eba352">
                    {" "}
                    <path d="M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1">
                      {" "}
                    </path>{" "}
                    <path d="M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <path
                    d="M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5"
                    fill="#ffdd67"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#eba352">
                    {" "}
                    <path d="M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4">
                      {" "}
                    </path>{" "}
                    <path d="M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </motion.div>
        </div>
        <div className="greet-para">
          <p>
            I’m Adarsh Singh, a dedicated web developer with expertise in
            building responsive, functional, and visually appealing websites.
            With a solid foundation in HTML, CSS, JavaScript, and ReactJS, I
            specialize in creating digital experiences that are intuitive and
            impactful.
          </p>
        </div>
      </div>
      &nbsp;
      <div className="greet-cloud">
        <div className="cloud cloud1">
          <img src={cloud} alt="cloud's image" />
          <p>ReactJs</p>
        </div>
        <div className="cloud cloud2">
          <img src={cloudL} alt="cloud's image" />
          <p>JavaScript</p>
        </div>
        <div className="cloud cloud3">
          <img src={cloud} alt="cloud's image" />
          <p>BootStrap</p>
        </div>
        <div className="cloud cloud4">
          <img src={cloudL} alt="cloud's image" />
          <p>HTML</p>
        </div>
        <div className="cloud cloud5">
          <img src={cloud} alt="cloud's image" />
          <p>Jquery</p>
        </div>
        <div className="cloud cloud6">
          <img src={cloud} alt="cloud's image" />
          <p>CSS</p>
        </div>
        <div className="cloud cloud7">
          <img src={cloud} alt="cloud's image" />
          <p>NodeJs</p>
        </div>
        <div className="cloud cloud8">
          <img src={cloud} alt="cloud's image" />
          <p>Tailwind</p>
        </div>
        &nbsp;
      </div>
      &nbsp;
      <div className="greet-pine">
        <div className="pine-tree">
          <img
            src={pineTree}
            className="pinetree"
            alt="pine's tree"
            width={445}
            height={438}
          />
        </div>
        <div className="pine-text">
          <div>Let's Create a New imagination World Together</div>
        </div>
        <div className="pine-contact">
          <div className="contact-outer">
            <div className="contact-link">
              <a href="/" className="resume-btn">
                Resume
              </a>
            </div>
            <div className="contact-leaf-left">
              <img src={leaf} className="contactleafleft" alt="leaf image" />
            </div>
            <div className="contact-leaf-right">
              <img src={leaf} className="contactleafright" alt="leaf image" />
            </div>
          </div>
          &nbsp;
          <div className="contact-outer">
            <div className="contact-link">
              <a
                href={certificatePdf}
                className="certificate-btn"
                download="Adarsh_Certificate.pdf"
              >
                Certificate
              </a>
            </div>
            <div className="contact-leaf-left">
              <img src={leaf} className="contactleafleft" alt="leaf image" />
            </div>
            <div className="contact-leaf-right">
              <img src={leaf} className="contactleafright" alt="leaf image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
