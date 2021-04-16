import {
  GET_SPACE_STUFF,
  SPACE_STUFF_SUCCESS,
  SPACE_STUFF_FAILURE,
  START_GETTING_SPACE_STUFF
} from '../actions'

const initialState = {
  headline: '',
  nasa: [],
  isGetting: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPACE_STUFF:
      return {
        ...state,
        headline: action.payload
      }
    case START_GETTING_SPACE_STUFF:
      return {
        ...state,
        isGetting: true
      }
    case SPACE_STUFF_SUCCESS:
      return {
        ...state,
        nasa: action.payload,
        isGetting: false
      }
    case SPACE_STUFF_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.payload
      }
    default:
      return state
  }
}