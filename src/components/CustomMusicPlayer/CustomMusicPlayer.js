import React, { useState, useRef, useEffect } from 'react';
import './CustomMusicPlayer.css';
import PlayIcon from '../../assets/icons/playIcon';
import PauseIcon from '../../assets/icons/pauseIcon';

const CustomMusicPlayer = () => {
  const audioSrc = 'https://storage.googleapis.com/music-playlists/%5BCR-34%5D%20Shinichi%20Atobe%20-%20Ship-Scope/thinredline';
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(audioSrc));

  // Play or pause the audio when isPlaying changes
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  // Update progress when audio is playing
  useEffect(() => {
    console.log('updating')
    const updateProgressAndTime = () => {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100);
      setCurrentTime(currentTime);
      setDuration(duration);
    };

    audioRef.current.addEventListener('timeupdate', updateProgressAndTime);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgressAndTime);
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (event) => {
    const newProgress = event.target.value;
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    setProgress(newProgress);
  };

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
