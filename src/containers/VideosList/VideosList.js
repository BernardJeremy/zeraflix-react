import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

import { updateVideosList } from '../../actions/VideosList';
import { toggleDetailsModal } from '../../actions/DetailsModal';

import formatVideoData from '../../tools/formatVideoData';
import TwitchApi from '../../webservices/Twitch';
import DetailsModal from './DetailsModal/DetailsModal';
import Pagination from './Pagination/Pagination';
import Footer from '../../components/Footer/Footer';


class VideosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lastChannelId: -1};
  }
  componentDidUpdate() {
    if (this.state.lastChannelId !== this.props.currentTwitchChannel.id) {
      this.setState({lastChannelId: this.props.currentTwitchChannel.id});
      TwitchApi.getVideosListFromChannel(this.props.currentTwitchChannel.id)
        .then(
          (result) => {
            this.props.onVideosListUpdate(result || []);
          },
          (error) => {
            // TODO
          }
        );
    }
  }

  getDetailsModalDisplayer(videoUrl) {
    return () => this.props.toggleModal(videoUrl);
  }

  render() {
    return (
      <section className="content">
        <h2>Zeraflix ({this.props.currentTwitchChannel.name})</h2>
        <section className="grid-wrapper">
          {
            this.props.videosArray.map((video, i) => {
              const formatedVideo = formatVideoData(video);
              return <VideoThumbnail
                videoUrl={formatedVideo.url}
                videoPreview={formatedVideo.thumbnail_url}
                videoLabel={formatedVideo.title}
                videoDate={formatedVideo.recorded_at}
                videoDuration={formatedVideo.length}
                onClickTumbnail={this.getDetailsModalDisplayer(formatedVideo.url)}
                key={i}
              />
            })
          }
        </section>
        <Pagination />
        {(() => {
          if (this.props.isDetailsModalOpen) {
            return (
              <DetailsModal open={this.props.isDetailsModalOpen} onClose={this.props.toggleModal} />
            )
          }
        })()}
      <Footer appLabel="Zeraflix"/>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    videosArray: state.videosList.videosArray,
    currentTwitchChannel: state.videosList.currentTwitchChannel,
    isDetailsModalOpen: state.detailsModal.isModalOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVideosListUpdate: videosData => {
      dispatch(updateVideosList(videosData));
    },
    toggleModal: targetVideoUrl => {
      dispatch(toggleDetailsModal(targetVideoUrl));
    }
  }
}

VideosList.propTypes = {
  videosArray: PropTypes.array.isRequired,
  currentTwitchChannel: PropTypes.object.isRequired,
  isDetailsModalOpen: PropTypes.bool.isRequired,
}

const VideosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideosList)


export default VideosListContainer
