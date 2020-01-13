import React from 'react';
import './Video.scss'

const Video = () => (
  <div className="video-container" id="video">
    <iframe
      title="YouTube Video"
      className="video"
      width="800"
      height="500"
      src="https://www.youtube.com/embed/a3ICNMQW7Ok"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen />
  </div>
);

export default Video;
