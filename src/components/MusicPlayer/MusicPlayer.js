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
    <div className="flex justify-center items-center h-full">
      <div className="text-center" style={{ transform: 'translateY(-50%)' }}>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={trackUrl}
            onChange={handleUrlChange}
            className="urlInput border p-2 rounded"
            placeholder="Enter SoundCloud URL"
          />
          <button type="submit" className="loadTrackBtn text-white p-2 rounded ml-2">
            Load Track
          </button>
        </form>
        {embedUrl && (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={embedUrl}
            title="SoundCloud Music Player"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
