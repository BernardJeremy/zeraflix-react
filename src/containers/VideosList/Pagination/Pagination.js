import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { updateVideosList } from '../../../actions/VideosList';

import TwitchApi from '../../../webservices/Twitch';

class Pagination extends React.Component {
  callTwitchUpdateVideoList(offsetType) {
    TwitchApi.getVideosListFromChannel(this.props.currentTwitchChannel.id, `${offsetType}=${this.props.paginationToken}`)
      .then(
        (result) => {
          this.props.onVideosListUpdate(result || []);
        },
        (error) => {
          // TODO
        }
      );
  }

  onClickPrev() {
    this.callTwitchUpdateVideoList('before');
  }

  onClickNext() {
    this.callTwitchUpdateVideoList('after');
  }

  render() {
    return (
      <nav className="pagination">
        <button className="prev" onClick={() => this.onClickPrev()}>&lt;</button>
        <button className="next" onClick={() => this.onClickNext()}>&gt;</button>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTwitchChannel: state.videosList.currentTwitchChannel,
    paginationToken: state.videosList.paginationToken,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onVideosListUpdate: videosData => {
      dispatch(updateVideosList(videosData));
    },
  }
}

Pagination.propTypes = {
  currentTwitchChannel: PropTypes.object.isRequired,
  paginationToken: PropTypes.string.isRequired,
  onVideosListUpdate: PropTypes.func.isRequired,
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination)


export default PaginationContainer
