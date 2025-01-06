import React, { useEffect, useState } from "react";
import "./Project.css";
import ProjectCard from "./Components/ProjectCard";
import calculatorImg from "../../assets/calculatorimg.jpg";
import todoImg from "../../assets/todolistimg.png";
import timerImg from "../../assets/timerimg.jpg";
import nightCoderImg from "../../assets/nightCoder.png";
import skatingSchoolImg from "../../assets/skatingSchool.png";
import netcraftImg from "../../assets/netcraft.png";
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
            ProjectImg={calculatorImg}
            ProjectTitle="Calculator"
            ProjectDesc="A powerful and visually appealing calculator built using ReactJS, JavaScript (ES6+), CSS3, Git/GitHub for version control, showcasing advanced UI/UX design and functional programming expertise A modern, dark-themed calculator with a clean and minimalistic design Fully responsive design, ensuring usability on desktops, tablets, and smartphones."
            ProjectLink="https://calculatoradarsh.vercel.app/"
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

             <ProjectCard
            ProjectImg={timerImg}
            ProjectTitle="Timer"
            ProjectDesc="The Timer List project is a dynamic and interactive web application built with ReactJS. It allows users to create, manage, and monitor multiple timers efficiently."
            ProjectLink=""
            onShowPopup={handleShowPopup}
            isHidden={isHidden}
          />

          <ProjectCard
            ProjectImg={todoImg}
            ProjectTitle="ToDo"
            ProjectDesc="The Timer List project is a dynamic and interactive web application built with ReactJS. It allows users to create, manage, and monitor multiple timers efficiently."
            ProjectLink=""
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
