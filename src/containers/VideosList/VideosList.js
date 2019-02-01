import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

import { updateVideosList } from '../../actions/VideosList';
import formatVideoData from '../../tools/formatVideoData';
import TwitchApi from '../../webservices/Twitch';


class VideosList extends React.Component {
  componentDidMount() {
    TwitchApi.getVideosListFromChannel(this.props.currentTwitchChannel.name)
    .then(
      (result) => {
        this.props.onVideosListUpdate(result.videos || []);
      },
      (error) => {
        // TODO
      }
    );
  }

  render() {
    return (
      <section className="content">
        <section className="part">
          {
            this.props.videosArray.map((video, i) => {
              const formatedVideo = formatVideoData(video);
              return <VideoThumbnail
                videoUrl={formatedVideo.url}
                videoPreview={formatedVideo.preview}
                videoLabel={formatedVideo.title}
                videoDate={formatedVideo.recorded_at}
                videoDuration={formatedVideo.length}
                key={i}
              />
            })
          }
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    videosArray: state.videosList.videosArray,
    currentTwitchChannel: state.videosList.currentTwitchChannel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideosListUpdate: videosData => {
      dispatch(updateVideosList(videosData))
    }
  }
}

VideosList.propTypes = {
  videosArray: PropTypes.array.isRequired,
  currentTwitchChannel: PropTypes.object.isRequired,
}

const VideosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideosList)


export default VideosListContainer
