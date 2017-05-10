import {
  GET_PROGRESS_SUCCESS,
  GET_PROGRESS_FAILURE,
  UPDATE_PROGRESS
} from '../constants/progress';

import {database} from '../../firebaseApp';

const getProgressSuccess = (progress) => ({type: GET_PROGRESS_SUCCESS, payload: progress,})

const getProgressFailure = (e) => ({type: GET_PROGRESS_FAILURE, payload: e.message,})

export const listenToProgress = user => async dispatch => {
  try {
    const ref = database.ref(`users/${user.uid}`);
    const snapshot = await ref.once('value');
    const data = snapshot.val();

    if (data !== null)
      dispatch(getProgressSuccess(data));
    else
      dispatch(getProgressSuccess({}));
    }
  catch (e) {
    dispatch(getProgressFailure(e));
  }
}

export const updateProgress = () => ({
  type: UPDATE_PROGRESS  
})
