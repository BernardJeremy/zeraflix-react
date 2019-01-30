import {
  UPDATE_VIDEOS_LIST,
} from '../containers/HeroesList/actions'

export default function videosList(state = {videosArray: []}, action) {
  switch (action.type) {
    case UPDATE_VIDEOS_LIST:
      return {videosArray: action.videosList}
    default:
      return state
  }
}
