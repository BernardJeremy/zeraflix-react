import {
  TOGGLE_DETAILS_MODAL,
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
    default:
      return state
  }
};
