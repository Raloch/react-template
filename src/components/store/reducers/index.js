import { combineReducers } from 'redux'
import titleReducer from './titleReducer'

export default combineReducers({
  homeTitle: titleReducer
})