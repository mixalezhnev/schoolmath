import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from '../constants/articles';

const initialState = {
  data: [],
  isFetching: false,
  error: null,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case GET_ARTICLES_FAILURE:
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
