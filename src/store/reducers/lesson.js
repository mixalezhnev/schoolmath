import {
  GET_LESSON_REQUEST,
  GET_LESSON_SUCCESS,
  GET_LESSON_FAILURE,
} from '../constants/lesson';

const initialState = {
  data: {
    title: '',
    content: {
      images: [],
      text: "",
    },
    questions: [],
  },
  isFetching: false,
  error: null,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSON_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case GET_LESSON_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload
        },
        isFetching: false,
      };
    case GET_LESSON_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default articles;
