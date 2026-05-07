import { ChangeEvent, useEffect, useRef, useState } from 'react';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import './Home.css';

const audioSrc =
  'https://storage.googleapis.com/music-playlists/%5BCR-34%5D%20Shinichi%20Atobe%20-%20Ship-Scope/thinredline';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      void audioElement.play().catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    audioElement.pause();
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateProgressAndTime = () => {
      const nextCurrentTime = audioElement.currentTime;
      const nextDuration = Number.isFinite(audioElement.duration)
        ? audioElement.duration
        : 0;

      setCurrentTime(nextCurrentTime);
      setDuration(nextDuration);
      setProgress(nextDuration > 0 ? (nextCurrentTime / nextDuration) * 100 : 0);
    };

    const resetPlaybackState = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audioElement.addEventListener('loadedmetadata', updateProgressAndTime);
    audioElement.addEventListener('timeupdate', updateProgressAndTime);
    audioElement.addEventListener('ended', resetPlaybackState);

    return () => {
      audioElement.pause();
      audioElement.removeEventListener('loadedmetadata', updateProgressAndTime);
      audioElement.removeEventListener('timeupdate', updateProgressAndTime);
      audioElement.removeEventListener('ended', resetPlaybackState);
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying((currentValue) => !currentValue);
  };

  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(event.target.value);
    const nextDuration = audioRef.current.duration;

    if (!Number.isFinite(nextDuration) || nextDuration <= 0) {
      return;
    }

    audioRef.current.currentTime = (newProgress / 100) * nextDuration;
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
  );
};

export default Home;
