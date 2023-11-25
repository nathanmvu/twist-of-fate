import React, { useState, useRef, useEffect } from 'react';
import './CustomMusicPlayer.css';
import PlayIcon from '../../assets/icons/playIcon';
import PauseIcon from '../../assets/icons/pauseIcon';

const CustomMusicPlayer = () => {
  const audioSrc = 'https://storage.googleapis.com/music-playlists/%5BCR-34%5D%20Shinichi%20Atobe%20-%20Ship-Scope/thinredline';
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(audioSrc));

  // Play or pause the audio when isPlaying changes
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  // Update progress when audio is playing
  useEffect(() => {
    const updateProgress = () => {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100);
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
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

  return (
    <div className="musicPlayerContainer">
      <div className="audioPlayerWrapper">
        {isPlaying ? (
          <PauseIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        ) : (
          <PlayIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        )}
        <input 
          type="range" 
          value={progress} 
          onChange={handleProgressChange} 
        />
      </div>
    </div>
  );
};

export default CustomMusicPlayer;
