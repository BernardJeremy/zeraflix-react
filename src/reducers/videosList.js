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
  paginationToken: '',
};

export default function videosList(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      if (!action.videosListData.data || !action.videosListData.pagination) {
        return {...state};
      }
      return {...state, 
        videosArray: action.videosListData.data,
        paginationToken: action.videosListData.pagination.cursor,
      };
    case UPDATE_CHANNEL_DATA:
      return {...state,
        videosArray: defaultState.videosArray,
        currentTwitchChannel: {
          name: action.channelData.login,
          id: action.channelData.id,
          data: {
            logo: action.channelData.profile_image_url,
          },
        }
      };
    default:
      return state
  }
};
