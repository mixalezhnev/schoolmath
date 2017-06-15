import { 
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE
} from '../constants/registration';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_GOGGLE_SUCCESS,
  LOGIN_GOGGLE_FAILURE 
} from '../constants/login';

const initialState = {
  name: '',
  error: null,
  anonymous: true
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        anonymous: false,
        userName: action.payload.displayName
      }
    case CREATE_ACCOUNT_FAILURE:
    case LOGIN_GOGGLE_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
      default:
        return state;
  }
}

export default user;
