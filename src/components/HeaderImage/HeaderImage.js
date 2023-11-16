import React from 'react';
import  title_image from '../../assets/ascii_twist_of_fate.png';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <div className="headerImage">
      <img
        src={title_image}
        alt="ascii title"
        className="centered-image"
      />
    </div>
  )
}

export default HeaderImage;