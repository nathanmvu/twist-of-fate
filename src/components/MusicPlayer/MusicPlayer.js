import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // default styles
import './MusicPlayer.css';

const MusicPlayer = () => {
  const audioSrc = 'https://storage.googleapis.com/music-playlists/%5BCR-34%5D%20Shinichi%20Atobe%20-%20Ship-Scope/thinredline';
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
      console.log("Playback started");
      setIsPlaying(true);
  };

  return (
    <div className="musicPlayerContainer">
      <div className="audioPlayerWrapper"> 
        <AudioPlayer
          src={audioSrc}
          onPlay={handlePlay}
          customAdditionalControls={[]} // Remove additional controls like volume
          customVolumeControls={[]} // Remove volume controls
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
