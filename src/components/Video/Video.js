import React from 'react';
import './Video.scss'
import {Button, Modal} from "semantic-ui-react";

const Video = () => (
  <div className="video-container" id="video">
    <Modal trigger={<Button color="red">Play Video</Button>}>
      <Modal.Header>Video</Modal.Header>
      <Modal.Content video>
        <iframe
          title="YouTube Video"
          className="video"
          width="800"
          height="500"
          src="https://www.youtube.com/embed/a3ICNMQW7Ok"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </Modal.Content>
    </Modal>

  </div>
);

export default Video;
