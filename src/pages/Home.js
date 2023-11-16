import React from 'react';
import HorizontalScrollingTextBar from './HorizontalScrollingTextBar';


const Home = () => {
  const text = ["a twist of fate has brought you here, where will u go next?"];

  return (
    <div>
      <h1>Hello World</h1>
      <HorizontalScrollingTextBar texts={text} />
    </div>
    

  )
}

export default Home;



// export {Home, PostIt}