import React from "react";
import "./Loading.scss";

const Loading = (props) => {
  return (
    <div className="loading">
      <div className="loading-item">
        <div className="loading-item-dot"></div>
        <div className="loading-item-dot"></div>
        <div className="loading-item-dot"></div>
        <div className="loading-item-dot"></div>
        <div className="loading-item-dot"></div>
        <div className="loading-item-dot"></div>
      </div>
    </div>
  );
}

export default Loading;
