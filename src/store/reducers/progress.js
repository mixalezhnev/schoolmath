import {
	SET_PROGRESS,
	SET_NEXT_EXERCISE
} from '../constants';

const initialState = {
	total: 0,
	next: 'Обозначение натуральных чисел',
};

const progress = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROGRESS:
			return {
				...state,
				total: action.payload
			};
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
