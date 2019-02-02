import React from 'react';
import PropTypes from 'prop-types';

const VideoThumbnail = (props) => (
  <div className="grid" onClick={props.onClickTumbnail}>
    <div className="preview">
      <a href={'#' + props.videoUrl}><img src={props.videoPreview} alt={props.videoLabel} /></a>
      <div className="time">{props.videoDate}</div>
      <div className="duration">{props.videoDuration}</div>
    </div>
    <div className="data data-time">
      <h3><a href={'#' + props.videoUrl}>{props.videoLabel}</a></h3>
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