import React from 'react';
import  title_image from '../../assets/ascii_twist_of_fate.png';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <img
      src={title_image}
      alt="ascii title"
      className="centered-image"
    />
  )
}

export default HeaderImage;