import { ChangeEvent } from 'react';
import PauseIcon from '../../assets/icons/pauseIcon';
import PlayIcon from '../../assets/icons/playIcon';
import './MusicPlayer.css';

type MusicPlayerProps = {
  isPlaying: boolean;
  handlePlayPause: () => void;
  progress: number;
  handleProgressChange: (event: ChangeEvent<HTMLInputElement>) => void;
  currentTime: number;
  duration: number;
};

const formatTime = (time: number) => {
  const safeTime = Number.isFinite(time) ? time : 0;
  const minutes = Math.floor(safeTime / 60);
  const seconds = Math.floor(safeTime % 60);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const MusicPlayer = ({
  isPlaying,
  handlePlayPause,
  progress,
  handleProgressChange,
  currentTime,
  duration,
}: MusicPlayerProps) => {
  return (
    <div className="musicPlayerContainer">
      <div className="audioPlayerWrapper">
        {isPlaying ? (
          <PauseIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        ) : (
          <PlayIcon color="#FF91FB" size="48px" onClick={handlePlayPause} />
        )}
        <div className="progressContainer">
          {progress === 0 ? (
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

export default MusicPlayer;
