import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

import { updateVideosList } from '../../actions/VideosList';

const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

class VideosList extends React.Component {
  componentDidMount() {
    const twitchApiRequest = new Request(`https://api.twitch.tv/kraken/channels/${this.props.twitchChannel}/videos?limit=12&offset=0&broadcast_type=archive&sort=time`, {
      headers: new Headers({
        'client-id': TWITCH_CLIENT_ID,
      }),
    });
    fetch(twitchApiRequest)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.onVideosListUpdate(result.videos);
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
              return <VideoThumbnail
                videoUrl={video.url}
                videoPreview={video.preview}
                videoLabel={video.title}
                videoDate={video.recorded_at}
                videoDuration={video.length}
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
  twitchChannel: PropTypes.string.isRequired,
}

const VideosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideosList)


export default VideosListContainer
