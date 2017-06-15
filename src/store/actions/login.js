import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_FAILURE
} from '../constants/login';

import * as firebase from 'firebase';
import { auth, database } from '../../firebaseApp';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
})

const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err
})

export const login = (email, password) => 
  async dispatch => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      dispatch(loginSuccess(user));

      return user;
    } catch(err) {
      dispatch( loginFailure(err.message) );
      throw new Error(err);
    }
  }

const loginWithGoogleSuccess = user => ({
  type: LOGIN_GOOGLE_SUCCESS,
  payload: user
});

const loginWithGoogleFailure = err => ({
  type: LOGIN_GOOGLE_FAILURE,
  payload: err
});

export const loginWithGoogle = () => 
  async dispatch => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
    
      const result = await firebase.auth().signInWithPopup(provider);
      const token = result.credential.accessToken;
      const user = result.user;

      dispatch( loginWithGoogleSuccess(user) )
    } catch(err) {
      dispatch( loginWithGoogleFailure(err.message) );
      throw new Error(err);
    }
  }