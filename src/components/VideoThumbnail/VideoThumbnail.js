import React from 'react';
import PropTypes from 'prop-types';

const VideoThumbnail = (props) => (
  <div className="grid" onClick={props.onClickTumbnail}>
    <div className="preview">
      <img src={props.videoPreview} alt={props.videoLabel} />
      <div className="time">{props.videoDate}</div>
      <div className="duration">{props.videoDuration}</div>
    </div>
    <div className="data data-time">
      <h3>{props.videoLabel}</h3>
    </div>
  </div>
);

VideoThumbnail.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  videoPreview: PropTypes.string.isRequired,
  videoLabel: PropTypes.string.isRequired,
  videoDate: PropTypes.string.isRequired,
  videoDuration: PropTypes.string.isRequired,
  onClickTumbnail: PropTypes.func.isRequired,
};

export default VideoThumbnail; 