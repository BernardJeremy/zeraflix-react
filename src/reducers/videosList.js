import {
  UPDATE_VIDEOS_LIST,
  UPDATE_CHANNEL_DATA,
} from '../actions/VideosList';

const defaultState = {
  videosArray: [],
  currentTwitchChannel: {
    name: 'zerator',
    data: {},
  },
};

export default function videosList(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      return {...state, videosArray: action.videosList};
    case UPDATE_CHANNEL_DATA:
      return {...state, currentTwitchChannel: {
          name: state.currentTwitchChannel.name,
          data: action.channelData,
        }
      };
    default:
      return state
  }
};
