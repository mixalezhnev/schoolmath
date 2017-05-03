import {
	SET_PROGRESS,
	SET_NEXT_EXERCISE
} from '../constants';

const initialState = {
  completed: 0,
	total: 0,
	next: 'Обозначение натуральных чисел',
};

const progress = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROGRESS: {
      const {completed, total} = action.payload;
      const percentage = Math.round(completed * 100 / total );

      return {
				...state,
        completed,
				total,
        percentage
			};
    }
		case SET_NEXT_EXERCISE:
			return {
				...state,
				next: action.payload
			}
		default:
			return state;
	}
}

export default progress;
