/*
 * action types
 */

export const UPDATE_VIDEOS_LIST = 'UPDATE_VIDEOS_LIST';

export const UPDATE_CHANNEL_DATA = 'UPDATE_CHANNEL_DATA';

/*
 * action creators
 */

export function updateVideosList(videosListData) {
  return { type: UPDATE_VIDEOS_LIST, videosListData }
};

export function updateChannelData(channelData) {
  return { type: UPDATE_CHANNEL_DATA, channelData }
};