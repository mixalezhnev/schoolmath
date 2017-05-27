import {GET_LESSON_REQUEST, GET_LESSON_SUCCESS, GET_LESSON_FAILURE} from '../constants/lesson';

const getLessonRequest = () => ({type: GET_LESSON_REQUEST})

const getLessonSuccess = (data) => ({type: GET_LESSON_SUCCESS, payload: data});

const getLessonFailure = (e) => ({type: GET_LESSON_FAILURE, payload: e.message});

export const listenToLesson = (id) => async dispatch => {
  try {
    dispatch(getLessonRequest());

    const json = await fetch(`https://api.cosmicjs.com/v1/kidsmath/object/${id}`);
    const data = await json.json();

    dispatch(getLessonSuccess(data.object));
  } catch (err) {
    dispatch(getLessonFailure(err));
  }
}