import {
  TOGGLE_DETAILS_MODAL,
} from '../actions/DetailsModal';

const defaultState = {
  isModalOpen: false,
};

export default function detailsModal(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_DETAILS_MODAL:
      return {...state, isModalOpen: !state.isModalOpen};
    default:
      return state
  }
};
