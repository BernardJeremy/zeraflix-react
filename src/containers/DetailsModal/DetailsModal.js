import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';

import { toggleDetailsModal, updateCurrentVideoLinks } from '../../actions/DetailsModal';
import DecoderApi from '../../webservices/Decoder';

import Modal from '../../components/Modal/Modal';


class DetailsModal extends React.Component {
  componentDidMount() {
    DecoderApi.getDecodedContentUrl(this.props.targetVideoUrl)
      .then(
        (result) => {
          this.props.onCurrentVideoLinksUpdate(result || []);
        },
        (error) => {
          // TODO
        }
      );
  }

  render() {
    return (
      <Modal open={this.props.isDetailsModalOpen} onClose={this.props.toggleModal}>
        <Typography variant="h6" id="modal-title">
          Choose a link (VLC or M3U8-Player)
        </Typography>
        {this.props.videoLinksArray.map((linkData, i) => {
          return (
            <p key={i} className="video-link">
              <a href={linkData.url} target="_blank" rel="noopener noreferrer">
                {linkData.type}
              </a>
            </p>
          );
        })}
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTwitchChannel: state.videosList.currentTwitchChannel,
    isDetailsModalOpen: state.detailsModal.isModalOpen,
    targetVideoUrl: state.detailsModal.targetVideoUrl,
    videoLinksArray: state.detailsModal.videoLinksArray,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleDetailsModal());
    },
    onCurrentVideoLinksUpdate: (videoLinks) => {
      dispatch(updateCurrentVideoLinks(videoLinks));
    },
  }
}

DetailsModal.propTypes = {
  currentTwitchChannel: PropTypes.object.isRequired,
  isDetailsModalOpen: PropTypes.bool.isRequired,
  targetVideoUrl: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onCurrentVideoLinksUpdate: PropTypes.func.isRequired,
  videoLinksArray: PropTypes.array.isRequired,
}

const DetailsModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsModal)


export default DetailsModalContainer;
