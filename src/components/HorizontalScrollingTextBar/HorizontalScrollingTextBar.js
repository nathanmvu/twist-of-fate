import React from 'react';
import './HorizontalScrollingTextBar.css';

const HorizontalScrollingTextBar = () => {
  const scrollingText = ["a twist of fate has brought you here, where will u go next?"];

  return (
    <div className="horizontal-scrolling-text-bar">
      <div className="text-container">
        {scrollingText.map((text, index) => (
          <span key={index} className="scrolling-text">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollingTextBar;