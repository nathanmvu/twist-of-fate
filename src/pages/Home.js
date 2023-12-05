import React, { useState, useEffect } from 'react';
import './Home.css'

import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';
import MusicPlayer from '../components/CustomMusicPlayer/CustomMusicPlayer';
import TextIdWheel from '../components/TextIdWheel/TextIdWheel';

const Home = () => {
  return (
    <div className="home flex flex-col h-screen">
      <HeaderImage />
      <HorizontalScrollingTextBar />
      <MusicPlayer />
      <TextIdWheel/>
    </div>
  )
}

export default Home;



// export {Home, PostIt}