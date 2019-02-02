import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';

import { toggleDetailsModal } from '../../actions/DetailsModal';

import Modal from '../../components/Modal/Modal';


class DetailsModal extends React.Component {
  componentDidMount() {
   /* TwitchApi.getVideosListFromChannel(this.props.currentTwitchChannel.name)
      .then(
        (result) => {
          //this.props.onVideosListUpdate(result.videos || []);
        },
        (error) => {
          // TODO
        }
      );*/
  }

  render() {
    return (
      <Modal open={this.props.isDetailsModalOpen} onClose={this.props.toggleModal}>
        <Typography variant="h6" id="modal-title">
          Choose a link (VLC or M3U8-Player)
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          Links here !
        </Typography>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTwitchChannel: state.videosList.currentTwitchChannel,
    isDetailsModalOpen: state.detailsModal.isModalOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleDetailsModal());
    }
  }
}

DetailsModal.propTypes = {
  currentTwitchChannel: PropTypes.object.isRequired,
  isDetailsModalOpen: PropTypes.bool.isRequired,
}

const DetailsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsModal)


export default DetailsModalContainer;
