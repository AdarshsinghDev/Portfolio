import React, { useState, useEffect, Suspense } from "react";
import "./App.css";

// Lazy load the components
const Loader = React.lazy(() => import("./Pages/Loader/Loader"));
const Homescreen = React.lazy(() => import("./Pages/Home/Homescreen"));
const LandingPage = React.lazy(() => import("./Pages/LandingPage/LandingPage"));
const Project = React.lazy(() => import("./Pages/Project/Project"));
const Navigation = React.lazy(() => import("./Pages/Navigation/Navigation"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const Loading = React.lazy(() => import("./Pages/Loading/Loading"));

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // manage  app is fully loaded
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);

    // Simulate a loading delay (e.g., fetch some data or wait for resources)
    const timer = setTimeout(() => setIsLoaded(true), 2000); // Show the loader for 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Suspense fallback={<Loading />}>
      {isLoaded && (
        <>
          <Loader/>
          <Homescreen toggleTheme={toggleTheme} />
          <LandingPage />
          <Project />
          <Navigation />
          <Contact theme={theme} />
        </>
      )}
    </Suspense>
  );
}

export default App;
