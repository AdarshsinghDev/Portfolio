import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
