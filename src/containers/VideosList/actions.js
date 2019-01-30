/*
 * action types
 */

export const UPDATE_VIDEOS_LIST = 'UPDATE_VIDEOS_LIST'

/*
 * action creators
 */

export function updateHeroesList(videosList) {
  return { type: UPDATE_VIDEOS_LIST, videosList }
}
