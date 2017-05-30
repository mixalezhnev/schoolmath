import { 
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE 
} from '../constants/registration';

const initialState = {
  name: '',
  error: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        error: null,
        userName: action.payload.displayName
      }
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      default:
        return state;
  }
}

export default user;
