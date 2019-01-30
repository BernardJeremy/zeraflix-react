import {
  UPDATE_VIDEOS_LIST,
} from '../actions/VideosList'

export default function videosList(state = {videosArray: []}, action) {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      return {videosArray: action.videosList}
    default:
      return state
  }
}
