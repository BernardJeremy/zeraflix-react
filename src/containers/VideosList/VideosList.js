import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { updateVideosList } from './actions';

const PUBLIC_MARVEL_API_KEY = process.env.REACT_APP_TWITCH_CLIENT_ID;  

class VideosList extends React.Component {
   componentDidMount() {
    fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_MARVEL_API_KEY}&limit=40`)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.onVideosListUpdate(result.data.results);
        },
        (error) => {
          // TODO
        }
      )
  }

  render() {
    return;
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
}

const VideosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideosList)


export default VideosListContainer
