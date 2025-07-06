import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import menusvg from "../../assets/menu.svg";
import closesvg from "../../assets/close.svg";
import hill from "../../assets/hill.png";
import branch from "../../assets/branch.png";
import menuleaf from "../../assets/menuleaf.svg";
import { Link } from "react-scroll";
import bgMusic from "../../assets/background-music.mp3";
import volumeIcon from "../../assets/volume.png";
import muteIcon from "../../assets/mute.png";

function Homescreen({ toggleTheme }) {
  const [slide, setSlide] = useState(() => {
    return localStorage.getItem("slide") === "true";
  });

  const slideBtn = () => {
    const newSlideState = !slide;
    setSlide(newSlideState);
    localStorage.setItem("slide", newSlideState);
  };

  const [toggleVisible, setToggleVisible] = useState(false);

  const menu = () => {
    setToggleVisible(!toggleVisible);

    const leafElement = document.getElementsByClassName("menu-leaf")[0];
    if (leafElement) {
      leafElement.style.animationName = toggleVisible ? "none" : "leafflow";
    }
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);



  useEffect(() => {
   
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Auto-play failed, trying muted mode:", err);
        if (audioRef.current) {
          audioRef.current.muted = true;
          await audioRef.current.play();
          setIsPlaying(false);
        }
      }
    };
    
    playAudio(); 
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem("audioState", "muted");
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        localStorage.setItem("audioState", "unmuted");
      }
    }
  };

  return (
    <motion.div
      className="main home-main"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <audio src={bgMusic} ref={audioRef} loop typeof="audio" muted={!isPlaying} />
      
      <div className="menu-icon">
        <div className="dark-btn">
          <div
            className={`dark-btn_circle ${slide ? "right" : "left"}`}
            onClick={() => {
              toggleTheme();
              slideBtn();
            }}
          ></div>
        </div>

        <div
          className="music-btn"
          onClick={toggleAudio}
          aria-label={isPlaying ? "Mute music" : "Unmute music"}
        >
          <img
            src={isPlaying ? volumeIcon : muteIcon}
            alt={isPlaying ? "Mute audio" : "Unmute audio"}
            width=""
            height=""
          />
        </div>

        <div className="main-menu">
          <div className={`menu-ul toggle-btn ${toggleVisible ? "visible" : "hidden"}`}>
            <ul className="menuul">
              <li>
                <button className="menu-link">
                  <Link
                    href="/Landing.jsx"
                    to="landing"
                    smooth={true}
                    offset={20}
                    duration={800}
                  >
                    About
                  </Link>
                </button>
              </li>
              <li>
                <button className="menu-link">
                  <Link
                    to="project"
                    href="/Project.jsx"
                    smooth={true}
                    offset={100}
                    duration={800}
                  >
                    Project
                  </Link>
                </button>
              </li>
              <li>
                <button className="menu-link">
                  <Link
                    to="contact"
                    href="/Contact.jsx"
                    smooth={true}
                    offset={30}
                    duration={800}
                  >
                    Contact
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div style={{ cursor: "pointer" }}>
            <img
              src={toggleVisible ? closesvg : menusvg}
              onClick={menu}
              className="bi bi-list menuicon"
              alt="menu icon"
              width={50}
              height={50}
            />
          </div>
          <div className="menu-leaf">
            <img
              src={menuleaf}
              className={`menuleaf toggle-btn ${toggleVisible ? "visble" : "hidden"}`}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div className="my-text">
        <h1 className="myname">I am Adarsh Singh</h1>
        <motion.h2
          initial={{ y: -100, scale: 1.3 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mywork"
        >
          Full Stack Developer
        </motion.h2>
      </div>
      <div className="home-img">
        <div className="branch-img1">
          <img
            className="branch1"
            src={branch}
            alt="Rotated tree branch"
            width={360}
            height={""}
          />
        </div>
        <div
          className="hill-img"
          style={{
            aspectRatio: `${480}/${462}`,
          }}
        >
          <img
            className="hillimg"
            src={hill}
            alt="Scenic hill"
            width=""
            height=""
          />
        </div>
        <div className="branch-img2">
          <img
            className="branch2"
            src={branch}
            alt="Tree branch"
            width={360}
            height={""}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Homescreen;
