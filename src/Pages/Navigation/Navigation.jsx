import React from "react";
import { motion } from "framer-motion";
import "./Navigation.css";
import cloud from "../../assets/cloud.png";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <>
      <div className="main">
        <div className="navigation-main">
          <div className="navigation-cloud">
            <div className="cloud-inner fast">
              <img src={cloud} className="navigationcloud" alt="Cloud 2" />
            </div>
            <div className="cloud-inner reverse">
              <img src={cloud} className="navigationcloud" alt="Cloud 3" />
            </div>
          </div>
          <div className="navigation-link">
            <ul className="navigationul">
              <li>
                <motion.div initial={{ x: 300, opacity:0.1 }} whileInView={{x:0, opacity:1}} transition={{duration:0.8}}>
                  <Link to="home" href="/Home.jsx" smooth={true} offset={10} duration={500}>
                    {" "}
                    H<span className="navigationdot">o</span>me
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div initial={{ x: -300, opacity:0.1 }} whileInView={{x:0, opacity:1}} transition={{duration:0.8}}>
                  <Link to="landing" href="/Landing.jsx" smooth={true} offset={30} duration={500}>
                    {" "}
                    Ab<span className="navigationdot">o</span>ut
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div initial={{ x: 300, opacity:0.1 }} whileInView={{x:0, opacity:1}} transition={{duration:0.8}}>
                  <Link to="project" href="/Project.jsx" smooth={true} offset={30} duration={500}>
                    Pr<span className="navigationdot">o</span>ject
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div initial={{ x: -300, opacity:0.1 }} whileInView={{x:0, opacity:1}} transition={{duration:0.8}}>
                  <Link to="contact" href="/Contact.jsx" smooth={true} offset={30} duration={500}>
                    C<span className="navigationdot">o</span>ntact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
