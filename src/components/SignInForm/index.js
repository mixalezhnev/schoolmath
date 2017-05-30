import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import AuthButton from '../AuthButton';
import styles from './SignInForm.css';

const SignInForm = ({ password, email, onChange, submit }) => {
  return (
    <form className={styles.form} onSubmit={submit}>
      <Input
        type='emial'
        text={'Адрес электронной почты'} />
      <Input
        type='password'
        text={'Пароль'} />
      <AuthButton onClick={submit} text={'Войти'}/>
    </form>
  );
}

SignInForm.propTypes = {

};

export default SignInForm;
