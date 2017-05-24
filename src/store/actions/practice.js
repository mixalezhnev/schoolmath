import {
	TOGGLE_MODAL,
  GET_EXERCISE_REQUEST,
  GET_EXERCISE_SUCCESS,
  POST_GET_EXERCISE_SUCCESS,
  GET_EXERCISE_FAILURE,
  UPDATE_EXERCISE_SUCCESS,
  UPDATE_EXERCISE_FAILURE,
  COMPLETE_LESSON_SUCCESS,
	COMPLETE_LESSON_FAILURE
} from '../constants/practice';

import { updateProgress } from './progress';

import { database, auth } from '../../firebaseApp';

export const toggleModal = () => ({
  type: TOGGLE_MODAL
})

const getExerciseRequest = (title) => ({
	type: GET_EXERCISE_REQUEST,
  payload: title
})

const getExerciseSuccess = ({ snapshot }) => ({
	type: GET_EXERCISE_SUCCESS,
	payload: {
    data: snapshot.val()
  }
});

export const postGetExerciseSuccess = ({ subject, lesson }) => ({
  type: POST_GET_EXERCISE_SUCCESS,
  payload: {
    subject,
    lesson
  }
})

const getExerciseFailure = (e) => ({
	type: GET_EXERCISE_FAILURE,
	payload: e.message
});

export const listenToExercise = ({subject, lesson, title}) =>
  async dispatch => {
		try {
      dispatch(toggleModal());
      dispatch(getExerciseRequest({subject, lesson, title}));

      const ref = database.ref(`exercises/${subject}/${lesson}`);

			const snapshot = await ref.once('value');

			dispatch(getExerciseSuccess({ snapshot }));
      dispatch(postGetExerciseSuccess({subject, lesson}))
		} catch (err) {
			dispatch(getExerciseFailure(err));
		}
  }

const updateExerciseSuccess = update => ({
  type: UPDATE_EXERCISE_SUCCESS,
  payload: update
})

const updateExerciseFailure = e => ({
  type: UPDATE_EXERCISE_FAILURE,
  payload: e.message
})

export const updateExercise = ({ subject, lesson, id }) =>
  async dispatch =>  {
    try {
      const ref = database.ref(`users/${auth.currentUser.uid}/${subject}/${lesson}/${id}`);

      const update = {
        completed: true
      };

      await ref.update(update);

      dispatch(updateExerciseSuccess({subject, lesson, id}));
    } catch(e) {
      dispatch(updateExerciseFailure(e));
    }
  }

export const completeLessonSuccess = ({lesson, subject}) => ({
	type: COMPLETE_LESSON_SUCCESS,
  payload: { lesson, subject }
})

export const completeLessonFailure = (e) => ({
	type: COMPLETE_LESSON_FAILURE,
  payload: e.message
})


export const completeLesson = ({ lesson, subject }) =>
  async dispatch =>  {
    try {
      const ref = database.ref(`users/${auth.currentUser.uid}/${subject}/${lesson}`);

      const update = {
        completed: true
      };

      await ref.update(update);

      dispatch(completeLessonSuccess({ lesson, subject }));
      dispatch(updateProgress())
    } catch(e) {
      dispatch(completeLessonFailure(e));
    }
  }
