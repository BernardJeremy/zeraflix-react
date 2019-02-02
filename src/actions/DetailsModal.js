/*
 * action types
 */

export const TOGGLE_DETAILS_MODAL = 'TOGGLE_DETAILS_MODAL'

export const UPDATE_CURRENT_VIDEO_LINKS = 'UPDATE_CURRENT_VIDEO_LINKS'

/*
 * action creators
 */

export function toggleDetailsModal(targetVideoUrl) {
  return { type: TOGGLE_DETAILS_MODAL, targetVideoUrl }
}

export function updateCurrentVideoLinks(videoLinks) {
  return { type: UPDATE_CURRENT_VIDEO_LINKS, videoLinks }
}