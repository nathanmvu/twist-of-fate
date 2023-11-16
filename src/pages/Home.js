import React, { useState, useEffect } from 'react';
import  title_image from '../assets/ascii_twist_of_fate.png';
// This import isn't working
// TODO: react/js formatting conventions?
import './CenteredImage.css'; 

// TODO: turn into marquee, have text constantly wrap?
import HorizontalScrollingTextBar from './HorizontalScrollingTextBar';


const Home = () => {
  const text = ["a twist of fate has brought you here, where will u go next?"];
  return (
    <div>
      <img
        src={title_image}
        alt="ascii title"
        className="centered-image"
      />
      <HorizontalScrollingTextBar texts={text} />       
    </div>
  )
}

export default Home;



// export {Home, PostIt}