import React, { useState, useEffect, useRef } from 'react';
import './Home.css'
// This import isn't working
// TODO: react/js formatting conventions?

// TODO: turn into marquee, have text constantly wrap?
import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioSrc = 'https://storage.googleapis.com/music-playlists/%5BCR-34%5D%20Shinichi%20Atobe%20-%20Ship-Scope/thinredline';
  const audioRef = useRef(new Audio(audioSrc));

  // Play or pause the audio when isPlaying changes
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  // Update progress when audio is playing
  useEffect(() => {
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

  return (
    <div className="home flex flex-column vh-100">
      <HeaderImage />
      <HorizontalScrollingTextBar />
      <MusicPlayer 
        isPlaying={isPlaying} 
        handlePlayPause={handlePlayPause} 
        progress={progress} 
        handleProgressChange={handleProgressChange} 
        currentTime={currentTime} 
        duration={duration} 
      />
    </div>
  )
}

export default Home;