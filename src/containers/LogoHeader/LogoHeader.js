import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { updateChannelData } from '../../actions/VideosList';
import TwitchApi from '../../webservices/Twitch';

class LogoHeader extends React.Component {
  componentDidMount() {
    TwitchApi.getChannelData(this.props.currentTwitchChannel.name)
      .then(
        (result) => {
          this.props.onChannelDataUpdate(result || {});
        },
        (error) => {
          // TODO
        }
      );
  }

  render() {
    return (
      <header>
        <div className="logo">
          {(() => {
            if (this.props.currentTwitchChannel.data.logo) {
              return <img src={this.props.currentTwitchChannel.data.logo} alt='Zeraflix' />;
            }
          })()}
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTwitchChannel: state.videosList.currentTwitchChannel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChannelDataUpdate: channelData => {
      dispatch(updateChannelData(channelData))
    }
  }
}

LogoHeader.propTypes = {
  currentTwitchChannel: PropTypes.object.isRequired,
}

const LogoHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoHeader)


export default LogoHeaderContainer; 