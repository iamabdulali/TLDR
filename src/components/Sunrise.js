import React from 'react';

const Sunrise = () => {
  return (
    <svg viewBox="0 0 800 600">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#005C97", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#363795", stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#FFC837", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#FF8B00", stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#skyGradient)" />
      <circle cx="400" cy="600" r="80" fill="url(#sunGradient)">
        <animate attributeName="cy" from="600" to="120" dur="3s" fill="freeze" />
      </circle>
    </svg>
  );
};

export default Sunrise;
