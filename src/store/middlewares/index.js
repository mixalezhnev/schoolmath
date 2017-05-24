import { SYNC_EXERCISES, POST_GET_EXERCISE_SUCCESS }
from '../constants/practice';

const syncExercises = (exercises) => ({
	type: SYNC_EXERCISES,
	payload: exercises
}
)

export const processExercises = ({ dispatch, getState }) => next => action => {
	if (action.type == POST_GET_EXERCISE_SUCCESS) {
		const state = getState();
		const { subject, lesson } = action.payload;
		const exercises = state.progress.data.subjects[subject][lesson];

		if (!exercises.completed){
			dispatch(syncExercises(exercises))
		}
	}

	return next(action);
}
