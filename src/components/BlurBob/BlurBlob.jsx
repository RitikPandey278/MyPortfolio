import React from 'react';
import PropTypes from 'prop-types';
import './BlurBlob.css'; // CSS import kiya

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="blur-blob-container"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
      }}
    >
      <div className="blur-blob"></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
