import React from 'react';

const PauseIcon = ({ color = 'black', size = '24px', onClick }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" onClick={onClick} style={{ cursor: 'pointer' }}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
};

export default PauseIcon;
