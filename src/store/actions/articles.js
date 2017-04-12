import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE
} from '../constants';

export const getArticles = (url) => {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES_REQUEST
    });

    fetch(url)
      .then(response => response.json())
      .then(articles => {
        dispatch({
          type: GET_ARTICLES_SUCCESS,
          payload: articles
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ARTICLES_FAILURE,
          payload: err.message
        });
      })
  }
}
