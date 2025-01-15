import React, { useEffect, useState } from "react";
import "./Project.css";
import ProjectCard from "./Components/ProjectCard";
import calculatorImg from "../../assets/calculatorimg.jpg";
import nightCoderImg from "../../assets/nightCoder.png";
import skatingSchoolImg from "../../assets/skatingSchool.png";
import netcraftImg from "../../assets/netcraft.png";
import tindogImg from "../../assets/tinDog.png";
import quoteImg from "../../assets/quote.png";
import weatherImg from "../../assets/weather.png";
import passgenImg from "../../assets/passgen.png";

import Slider from "react-slick";
import clickSound from "../../assets/click.mp3";

function Project() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [isHidden, setIsHidden] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 466,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleShowPopup = (know) => {
    setSelectedProject(know);
    setIsPopupVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const sound = new Audio(clickSound);
    sound.preload = "auto";

    const handleButtonClick = (event) => {
      if (event.target.classList.contains("click-sound")) {
        sound.currentTime = 0;
        sound.play();
      }
    };

    document.addEventListener("click", handleButtonClick);

    return () => {
      document.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <>
      <div className="project-main main" id="project">
        <u>
          <h1 className="project-title">Projects</h1>
        </u>
        <Slider {...settings}>

           <ProjectCard
            ProjectImg={calculatorImg}
            ProjectTitle="Calculator"
            ProjectDesc="A powerful and visually appealing calculator built using ReactJS, JavaScript (ES6+), CSS3, Git/GitHub for version control, showcasing advanced UI/UX design and functional programming expertise A modern, dark-themed calculator with a clean and minimalistic design Fully responsive design, ensuring usability on desktops, tablets, and smartphones."
            ProjectLink="https://calculatoradarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

          <ProjectCard
            ProjectImg={passgenImg}
            ProjectTitle="Random Password Generator"
            ProjectDesc="This password generator offers customizable options for password creation. Users can control the password length and select which types of characters (uppercase, lowercase, numbers, symbols) to include, giving them full control over their password's strength and complexity."
            ProjectLink="https://password-generator-adarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

          <ProjectCard
            ProjectImg={weatherImg}
            ProjectTitle="Weather"
            ProjectDesc="A responsive weather application built using HTML, CSS, and JavaScript. The app fetches real-time weather data, allowing users to check current weather conditions for any location worldwide. It features:

Interactive Design: User-friendly interface with dynamic background updates based on weather conditions.
API Integration: Uses reliable weather APIs to provide accurate and up-to-date information.
Responsive Layout: Optimized for various screen sizes, ensuring seamless functionality on desktop and mobile devices.
This project demonstrates my skills in front-end development, API handling, and responsive design principles."
            ProjectLink="https://weather-app-adarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />
          
          <ProjectCard
            ProjectImg={skatingSchoolImg}
            ProjectTitle="Skating School"
            ProjectDesc="This project is a responsive website for a skating school, designed and developed using HTML and CSS. It serves as an informational and promotional platform to showcase the school's offerings, courses, and expertise. This project highlights My ability to create clean, visually appealing, and functional designs"
            ProjectLink="https://skatingschool.netlify.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />
          
          <ProjectCard
            ProjectImg={nightCoderImg}
            ProjectTitle="Night Coder"
            ProjectDesc="I developed my first portfolio website using HTML and CSS after learning them for just three weeks this is Responsive with Clean and Simple Design"
            ProjectLink="https://nightcoderadarsh.netlify.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

          <ProjectCard
            ProjectImg={netcraftImg}
            ProjectTitle="NetCraft"
            ProjectDesc="NetCraft is a  modern, and fully responsive website template built using HTML, CSS, and JavaScript. Designed to showcase the versatility and potential of web development, this template offers a clean, minimalistic layout that adapts seamlessly across all device sizes. With its focus on user experience and intuitive design, NetCraft includes a fully functional navigation bar, dynamic content sections, and smooth animations that engage users This is Proffesional and Commercial level website."
            ProjectLink="https://netcraftweb.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />
          

             <ProjectCard
            ProjectImg={tindogImg}
            ProjectTitle="TinDog"
            ProjectDesc="Tindog is a web app designed for dog owners to connect, create profiles for their dogs, and interact with other pet lovers. Users can browse profiles, find playmates, and join a community of like-minded dog enthusiasts."
            ProjectLink="https://tindog-adarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

          <ProjectCard
            ProjectImg={quoteImg}
            ProjectTitle="Random Quote Generator"
            ProjectDesc="An interactive web application built with HTML, CSS, and JavaScript, the Quote Generator allows users to discover and explore inspiring quotes. The application is fully responsive, ensuring a seamless experience across various devices. This project highlights proficiency in front-end development, with an emphasis on user-centric design and dynamic JavaScript functionality."
            ProjectLink="https://quote-generator-adarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />
        </Slider>
      </div>

      {isPopupVisible && (
        <div className="desc-main">
          <div
            className={`desc-inner ${isPopupVisible ? "show" : ""}`}
            aria-hidden={isHidden ? "true" : "false"}
          >
            <h1>{selectedProject.ProjectTitle}</h1>
            <p>{selectedProject.ProjectDesc}</p>
            <div className="popup-window-note">
              <b>Important: &nbsp;</b>{" "}
              <i>
                Please note that scrolling is disabled while this window is
                active.
              </i>
            </div>
            <button
              aria-hidden={isHidden ? "true" : "false"}
              tabIndex={isHidden ? "-1" : "0"} // Correct use of tabIndex in React
              className="click-sound"
              onClick={() => {
                setIsHidden(!isHidden);
                handleClosePopup(); // Correctly call handleClosePopup
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
