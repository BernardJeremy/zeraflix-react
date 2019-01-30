/*
 * action types
 */

export const UPDATE_VIDEOS_LIST = 'UPDATE_VIDEOS_LIST'

/*
 * action creators
 */

export function updateVideosList(videosList) {
  return { type: UPDATE_VIDEOS_LIST, videosList }
}
