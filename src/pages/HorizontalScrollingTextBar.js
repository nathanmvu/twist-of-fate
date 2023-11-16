import React from 'react';
import './HorizontalScrollingTextBar.css';

const HorizontalScrollingTextBar = ({ texts }) => {
  return (
    <div className="horizontal-scrolling-text-bar">
      <div className="text-container">
        {texts.map((text, index) => (
          <span key={index} className="scrolling-text">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollingTextBar;