import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import PlayIcon from '../../assets/icons/playIcon';
import PauseIcon from '../../assets/icons/pauseIcon';

const CustomMusicPlayer = (props) => {
  const {
    isPlaying,
    handlePlayPause,
    progress,
    handleProgressChange,
    currentTime,
    duration,
  } = props;

  /**
   * Format time for progress
   * @param {*} time 
   * @returns 
   */
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className="musicPlayerContainer">
      <div className="audioPlayerWrapper">
        {isPlaying ? (
          <PauseIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        ) : (
          <PlayIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        )}
        <div className="progressContainer">
          {progress === 0 ? 
          (
            <span className="f4 lh-copy">tune in</span>
          ) : (
            <>
              <input 
                type="range" 
                className="progressBar"
                value={progress} 
                onChange={handleProgressChange} 
              />
              <div className="timeInfo">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomMusicPlayer;
