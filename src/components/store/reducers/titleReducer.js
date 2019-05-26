import { TITLE_POST, TITLE_Change } from '../types'

const initialState = {
  title: '123456'
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TITLE_POST:
      return {
        ...state
      }
    case TITLE_Change:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}