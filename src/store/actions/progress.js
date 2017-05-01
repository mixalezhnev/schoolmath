import {
	SET_PROGRESS,
	SET_NEXT_EXERCISE
} from '../constants';


export default (total = 5) => {
	return {
		type: SET_PROGRESS,
		payload: total
	}
}
