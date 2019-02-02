import {
  TOGGLE_DETAILS_MODAL,
  UPDATE_CURRENT_VIDEO_LINKS,
} from '../actions/DetailsModal';

const defaultState = {
  isModalOpen: false,
  targetVideoUrl: null,
  videoLinksArray: [],
};

export default function detailsModal(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_DETAILS_MODAL:
      return {...state,
        isModalOpen: !state.isModalOpen,
        targetVideoUrl: action.targetVideoUrl || null,
      };
    case UPDATE_CURRENT_VIDEO_LINKS:
      return {...state,
        videoLinksArray: action.videoLinks,
      };
    default:
      return state
  }
};
