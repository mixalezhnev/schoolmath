import {
	GET_PROGRESS_SUCCESS,
	GET_PROGRESS_FAILURE
} from '../constants/progress';

const initialState = {
  progress: {
    completed: false,
    subjects: {}
  },
  error: null
};

const progress = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROGRESS_SUCCESS: {
      return {
				...state,
        progress: action.payload
			};
    }
		case GET_PROGRESS_FAILURE:
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
}

export default progress;
