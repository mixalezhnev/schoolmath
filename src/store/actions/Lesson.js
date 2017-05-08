import {
	GET_LESSON_REQUEST,
	GET_LESSON_SUCCESS,
	GET_LESSON_FAILURE
} from '../constants/lesson';

import { database } from '../../firebaseApp';

const getLessonRequest = () => ({
	type: GET_LESSON_REQUEST,
})

const getLessonSuccess = (snapshot) => ({
	type: GET_LESSON_SUCCESS,
	payload: snapshot.val()
});

const getLessonFailure = (e) => ({
	type: GET_LESSON_FAILURE,
	payload: e.message
});

export const listenToLesson = (id) => {
	return async dispatch => {
		try {
      dispatch(getLessonRequest());

      const ref = database.ref(`lessons/${id}`);
			const snapshot = await ref.once('value');

			dispatch(getLessonSuccess(snapshot));
		} catch (err) {
			dispatch(getLessonFailure(err));
		}
	}
}
