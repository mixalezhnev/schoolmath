import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from '../constants/registration';

import * as firebase from 'firebase';
import { auth, database } from '../../firebaseApp';

const createAccountSuccess = user => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload: user
})

const createAccountSFailure = err => ({
  type: CREATE_ACCOUNT_FAILURE,
  payload: err
})

export const createAccount = (name, email, password) => 
  async dispatch => {
    try {
      let user;

      if (auth.currentUser.isAnonymous) {
        const credential = firebase.auth.EmailAuthProvider.credential(email, password);
        user = await auth.currentUser.linkWithCredential(credential);
      } else
        user = await auth.createUserWithEmailAndPassword(email, password);

      const userRef = database.ref(`users/${user.uid}`);
      const updates = {
        userName: name
      }
      await userRef.update(updates);

      user.sendEmailVerification();
      await user.updateProfile({ displayName: name });

      dispatch( createAccountSuccess(user) );

      return user;
    } catch(err) {
      dispatch( createAccountSFailure(err.message) );
      throw new Error(err);
    }
  }