import { combineReducers } from 'redux';

import videosList from './videosList';
import detailsModal from './detailsModal';

export default combineReducers({
  videosList,
  detailsModal,
});
