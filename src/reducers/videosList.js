import {
  UPDATE_VIDEOS_LIST,
  UPDATE_CHANNEL_DATA,
  UPDATE_CURRENT_OFFSET,
} from '../actions/VideosList';

const defaultState = {
  videosArray: [],
  currentTwitchChannel: {
    name: 'zerator',
    data: {},
  },
  currentOffset: 0,
};

export default function videosList(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      return {...state, videosArray: action.videosList};
    case UPDATE_CHANNEL_DATA:
      return {...state,
        videosArray: defaultState.videosArray,
        currentOffset: defaultState.currentOffset,
        currentTwitchChannel: {
          name: action.channelData.login,
          id: action.channelData.id,
          data: {
            logo: action.channelData.profile_image_url,
          },
        }
      };
    case UPDATE_CURRENT_OFFSET:
      const newOffset = state.currentOffset + action.offsetModifier
      return {...state, currentOffset: newOffset < 0 ? 0 : newOffset};
    default:
      return state
  }
};
