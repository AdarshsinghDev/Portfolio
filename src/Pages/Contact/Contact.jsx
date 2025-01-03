import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import github from "../../assets/github.svg";
import x from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import gmail from "../../assets/gmail.svg";
import profile from "../../assets/profile.png";
import animeProfile from "../../assets/anime-profile.png";
import Swal from "sweetalert2";
import sendSound from "../../assets/send.mp3";

function Contact({ theme }) {
  const audioRef = useRef(new Audio(sendSound)); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e8d071e0-0724-4ee1-851c-70e5c3fa24bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // Play the sound effect
      audioRef.current.play();
      
      Swal.fire({
        title: "Connected with Adarsh :)",
        text: "Message Sent Successfully",
        icon: "success",
      });
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const colorfff = "#ffff";

  return (
    <div className="main contact-main" id="contact" ref={sectionRef}>
      <div className="main-cta">
        &nbsp;
        <div className="sun-cta">
          <img
            src={theme === "dark" ? moon : sun}
            alt={theme === "dark" ? "moon" : "sun"}
            className={theme === "dark" ? "moon-img" : "sun-img"}
          />
        </div>{" "}
        &nbsp;
        <header className="header-cta">
          <div className="head-cta_text">
            <div className="h1-cta">
              <h2>Let's Connect!</h2>
            </div>
            <p>
              Feel free to reach out for collaborations, queries, or just to say
              hi!
            </p>
          </div>
        </header>
        <div className="inner-cta">
          <div className="form-cta-main">
            <form className="form-cta" onSubmit={onSubmit}>
              <div className="form-input">
                <div className="form-group">
                  <input
                    type="text"
                    id="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter valid email"
                    required
                  />
                </div>
                <div className="form-msg">
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-btn">
                <button className="form-btn_btn" type="submit">
                  Send
                </button>
                <div className="form-link">
                  <a
                    href="https://github.com/AdarshsinghDev"
                    className="social-icon"
                    target="_blank"
                  >
                    <img
                      src={github}
                      alt="github's icon"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="/" className="social-icon" target="_blank">
                    <img src={x} alt="x's icon" width={30} height={30} />
                  </a>
                  <a href="/" className="social-icon" target="_blank">
                    <img
                      src={linkedin}
                      alt="linkedin's icon"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="mailto:adarshwebofficial@gmail.com"
                    className="social-icon"
                  >
                    <img
                      src={gmail}
                      alt="gmail's icon"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://www.instagram.com/ft.adarshsingh" className="social-icon" target="_blank">
                    <img
                      src={instagram}
                      alt="instagram's icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="myimage-cta">
            <div className="myimage-cta_img">
              <motion.img
                src={profile}
                className="myimage-cta_img1"
                alt="profile's picture"
                width=""
                height=""
              />
              <motion.img
                src={animeProfile}
                className="myimage-cta_img2"
                alt="anime profile"
                style={{ opacity: isInView ? 0 : 1 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: isInView ? 0 : 1 }}
                transition={{ duration: 5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Designed & Developed with &#128150; by Adarsh Singh. ©{" "}
          {new Date().getFullYear()} Adarsh Singh. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Contact;
