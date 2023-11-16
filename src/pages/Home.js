import React, { useState, useEffect } from 'react';
// This import isn't working
// TODO: react/js formatting conventions?

// TODO: turn into marquee, have text constantly wrap?
import HeaderImage from '../components/HeaderImage/HeaderImage';
import HorizontalScrollingTextBar from '../components/HorizontalScrollingTextBar/HorizontalScrollingTextBar';

const Home = () => {
  const text = ["a twist of fate has brought you here, where will u go next?"];
  return (
    <div>
      <HeaderImage />
      <HorizontalScrollingTextBar texts={text} />       
    </div>
  )
}

export default Home;



// export {Home, PostIt}