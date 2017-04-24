import {
  GET_PROGRESS_REQUEST,
  GET_PROGRESS_SUCCESS,
  GET_PROGRESS_FAILURE
} from '../constants';

import getProgress from '../../api/getProgress';

export default () => {
  return (dispatch) => {
    dispatch({
      type: GET_PROGRESS_REQUEST
    });

    getProgress()
      .then(response => response.json())
      .then(articles => {
        dispatch({
          type: GET_PROGRESS_SUCCESS,
          payload: articles
        })
      })
      .catch(err => {
        dispatch({
          type: GET_PROGRESS_FAILURE,
          payload: err.message
        });
      })
  }
}
