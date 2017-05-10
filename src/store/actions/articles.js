import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from '../constants/articles';

import {database} from '../../firebaseApp';

const ref = database.ref('articles');

const getArticlesRequest = () => ({type: GET_ARTICLES_REQUEST})

const getArticlesSuccess = (snapshot) => ({type: GET_ARTICLES_SUCCESS, payload: snapshot.val(),});

const getArticlesFailure = (err) => ({type: GET_ARTICLES_FAILURE, payload: err.message,});

export const listenToArticles = () => {
  return async dispatch => {
    try {
      dispatch(getArticlesRequest());
      const snapshot = await ref.once('value');
      dispatch(getArticlesSuccess(snapshot));
    } catch (err) {
      dispatch(getArticlesFailure(err));
    }
  }
}
