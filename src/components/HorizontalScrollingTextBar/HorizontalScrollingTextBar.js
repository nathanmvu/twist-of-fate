import React from 'react';
import './HorizontalScrollingTextBar.css';

const HorizontalScrollingTextBar = () => {
  const scrollingText = ["a twist of fate has brought you here, where will u go next?"];
  const repetitions = 10; 

  return (
    <div className="horizontal-scrolling-text-bar">
      <div className="text-container">
        {scrollingText.map((text, textIndex) => (
          Array(repetitions).fill(null).map((_, repIndex) => (
            <React.Fragment key={textIndex + '-' + repIndex}>
              <span className="scrolling-text courier f4 lh-copy">{text}</span>
              <span className="separator"></span> {/* Invisible separator */}
            </React.Fragment>
          ))
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollingTextBar;