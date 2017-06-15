import {
  TOGGLE_MODAL,
  GET_EXERCISE_REQUEST,
  GET_EXERCISE_SUCCESS,
  POST_GET_EXERCISE_SUCCESS,
  GET_EXERCISE_FAILURE,
  UPDATE_EXERCISE_SUCCESS,
  UPDATE_EXERCISE_FAILURE,
  COMPLETE_LESSON_SUCCESS,
  COMPLETE_LESSON_FAILURE,
  SET_CORRECT,
  FINISH_EXERCISE
} from '../constants/practice';

import { getFirstLesson } from '../../ulits';

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
async (dispatch, getState) => {
  try {
    dispatch(toggleModal());
    if (!lesson) {
      const progress = getState().progress.data.subjects[subject];
      const subjectObj = getState().articles.data.find(subj => subj.id == subject);

      const targetLesson = getFirstLesson({subject: subjectObj, progress});
      
      lesson = targetLesson.id;
      title = targetLesson.title;
    }

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
      const ref = database.ref(`users/${auth.currentUser.uid}/progress/${subject}/${lesson}/${id}`);

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
      const ref = database.ref(`users/${auth.currentUser.uid}/progress/${subject}/${lesson}`);

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

  export const setCorrect = isCorrect => ({
    type: SET_CORRECT,
    payload: isCorrect
  })

  export const finishExercise = () => ({
    type: FINISH_EXERCISE
  })
