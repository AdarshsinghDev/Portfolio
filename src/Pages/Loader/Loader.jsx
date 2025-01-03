import React, { useEffect, useState } from "react";
import "./Loader.css";
import logo from "../../assets/logo.png";
import loaderLeaf from "../../assets/loader-leaf.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => {
      clearTimeout(timer);
     
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="loader-container open">
          <div className="loader-animation">
            <div className="door-left"></div>
            <div className="door-right"></div>
            <LazyLoadImage effect="blur" className="loader-logo" src={logo} alt="Website Logo" />
          </div>
          <div className="falling-leaves">
            {[...Array(30)].map((_, index) => (
              <div
                key={index}
                className="falling-leaf"
                style={{
                  left: `${Math.random() * 100}vw`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 40 + 20}px`, 
                  height: `${Math.random() * 40 + 20}px`,
                }}
              >
                <img src={loaderLeaf} alt="Falling leaf" />
              </div>
            ))}
          </div>
          <p className="loader-text">Bringing Nature to You...</p>
        </div>
      )}
    </>
  );
}

export default Loader;
