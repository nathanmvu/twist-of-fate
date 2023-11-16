import React, { useState, useEffect } from 'react';
// This import isn't working
// TODO: react/js formatting conventions?

// TODO: turn into marquee, have text constantly wrap?
import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

const Home = () => {
  return (
    <div className="home flex flex-col h-screen">
      <HeaderImage />
      <HorizontalScrollingTextBar />
      <MusicPlayer />
    </div>
  )
}

export default Home;



// export {Home, PostIt}