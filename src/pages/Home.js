import React, { useState, useEffect } from 'react';
import './Home.css'
// This import isn't working
// TODO: react/js formatting conventions?

// TODO: turn into marquee, have text constantly wrap?
import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';
import MusicPlayer from '../components/CustomMusicPlayer/CustomMusicPlayer';

const Home = () => {
  return (
    <div className="home flex flex-column vh-100">
      <HeaderImage />
      <HorizontalScrollingTextBar />
      <MusicPlayer />
    </div>
  )
}

export default Home;