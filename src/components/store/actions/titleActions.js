import { TITLE_POST, TITLE_Change } from '../types'

export const getTitle = () => dispatch => {
  dispatch({
    type: TITLE_POST
  })
}

export const changeTitle = (val) => dispatch => {
  dispatch({
    type: TITLE_Change,
    payload: val
  })
}