import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


import TwitchApi from '../../webservices/Twitch';
import { updateChannelData } from '../../actions/VideosList';

class ChannelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelName: this.props.currentTwitchChannel.name,
      hasChanged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.state.hasChanged) {
      TwitchApi.getChannelData(this.state.channelName)
      .then(
        (result) => {
          this.props.onChannelDataUpdate(result || {});
        },
        (error) => {
          // TODO
        }
        );
    }
    this.setState({hasChanged: false});
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({channelName: event.target.value, hasChanged: true});
  }

  render() {
    return (
      <form className="form-input-channel" onSubmit={this.handleSubmit}>
        <input className="input-channel" type="text" value={this.state.channelName} onChange={this.handleChange}/>
        <input className="submit-input-channel"type="submit" value="Go !" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTwitchChannel: state.videosList.currentTwitchChannel,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChannelDataUpdate: channelData => {
      dispatch(updateChannelData(channelData))
    }
  };
}

ChannelInput.propTypes = {
  currentTwitchChannel: PropTypes.object.isRequired,
}

const ChannelInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelInput)


export default ChannelInputContainer; 