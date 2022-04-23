import React from "react";

function index({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#14b8a6"
        d="M42.1,-50.3C55.5,-39,68,-26.6,74.3,-10.2C80.7,6.2,81,26.5,72.8,43.4C64.7,60.2,48.1,73.5,32.3,72.1C16.4,70.7,1.2,54.7,-16.7,47.5C-34.6,40.3,-55.1,42,-60.8,34.2C-66.4,26.3,-57.1,8.9,-50.6,-5.6C-44.1,-20.2,-40.3,-31.9,-32.4,-44.2C-24.4,-56.5,-12.2,-69.5,1.1,-70.8C14.4,-72.1,28.7,-61.7,42.1,-50.3Z"
        transform="translate(100 100) scale(1.1)"
      />
    </svg>
  );
}

export default index;
