import React from 'react';
import './BallCalendly.css'

const BallCalendly = () => {
  return (
    <div style={{ height: "100%", margin: "auto" }}>
      <iframe
        title="Ball Field"
        style={{ width: "100%", height: "100%" }}
        src="https://calendly.com/grandycommunitycenter/ball-field-rental"
        width="100%"
        height="100%"
        frameborder="0"

      ></iframe>
    </div>
  );
};

export default BallCalendly;