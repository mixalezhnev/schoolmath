import {
  TOGGLE_MODAL,
  GET_EXERCISE_REQUEST,
  GET_EXERCISE_SUCCESS,
  GET_EXERCISE_FAILURE,
  UPDATE_EXERCISE_SUCCESS,
  UPDATE_EXERCISE_FAILURE,
  COMPLETE_LESSON_SUCCESS
} from '../constants/practice';

const initialState = {
  modalState: false,
  title: '',
  subject: '',
  lesson: '',
  exercises: [],
  completed: false,
  finished: false,
  isFetching: false,
  error: null,
};

const practice = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalState: !state.modalState,
        finished: state.modalState ? false : state.finished
      }
    case GET_EXERCISE_REQUEST:
      return {
        ...state,
        ...action.payload,
        finished: false,
        isFetching: true
      }
    case GET_EXERCISE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        exercises: action.payload.map((ex) => {
          if (!ex.completed)
            return {
              ...ex,
              completed: false,
            }
          }),
          completed: false
      }
    case GET_EXERCISE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case UPDATE_EXERCISE_SUCCESS:
      {
        const {id} = action.payload;
        return {
          ...state,
          exercises: state.exercises.map(ex => {
            if (ex.id == id)
              return {
                ...ex,
                completed: true,
              }
            return ex;
          }),
        }
      }
    case UPDATE_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case COMPLETE_LESSON_SUCCESS:
      return {
        ...state,
        completed: true,
        finished: true
      }
    default:
      return state;
  }
}

export default practice;
