import {
  GET_PROGRESS_REQUEST,
  GET_PROGRESS_SUCCESS,
  GET_PROGRESS_FAILURE
} from '../constants';

const initialState = {
  total: 0,
  next: 'Обозначение натуральных чисел',
  isFetching: false,
  error: null
};

const progress = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROGRESS_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      }
    case GET_PROGRESS_SUCCESS:
      {
        const {total, next} = action.payload;
        return {
          ...state,
          total,
          next,
          isFetching: false
        };
      }
    case GET_PROGRESS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

export default progress;
