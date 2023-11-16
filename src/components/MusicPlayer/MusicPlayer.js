import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [trackUrl, setTrackUrl] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');

  const handleUrlChange = (event) => {
    setTrackUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the embed URL
    setEmbedUrl(`https://w.soundcloud.com/player/?url=${trackUrl}`);
  };

  return (
    <div className="musicPlayer flex flex-col items-center w-full">
      <div className="w-2/5"> {/* Smaller width for input form */}
        <form onSubmit={handleSubmit} className="mb-4 flex">
          <input
            type="text"
            value={trackUrl}
            onChange={handleUrlChange}
            className="urlInput border p-2 rounded flex-grow"
            placeholder="Enter SoundCloud URL"
          />
          <button type="submit" className="loadTrackBtn bg-blue-500 text-white p-2 rounded ml-2">
            Load Track
          </button>
        </form>
      </div>
      <div className="w-4/5"> {/* Larger width for embed */}
        {embedUrl && (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={embedUrl}
            title="SoundCloud Music Player"
            className="w-full"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
