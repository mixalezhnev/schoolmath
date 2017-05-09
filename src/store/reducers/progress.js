import {
	GET_PROGRESS_SUCCESS,
	GET_PROGRESS_FAILURE
} from '../constants/progress';

const initialState = {
  data: {
    next: "Обозначение натуральных чисел",
    total: 125,
    completed: 0,
    percentage: 0,
    // прогресс по разделам и урокам
    subjects: {}
  },
  error: null
};

const progress = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROGRESS_SUCCESS: {
      if (Object.keys(action.payload).length == 0)
        return state;

      // Здесь будет происходить вся магия связання с прогрессом
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
