import React from 'react';
import  title_image from '../../assets/ascii_twist_of_fate.png';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <div className="headerContainer">
      <img
        src={title_image}
        alt="ascii title"
        className="headerImage pa4"
      />
    </div>
  )
}

export default HeaderImage;