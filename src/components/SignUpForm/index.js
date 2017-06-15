import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import AuthButton from '../AuthButton';

import { browserHistory } from 'react-router';

import {
  validateEmpty,
  validateIdentity
} from '../../ulits';

export class SignUpForm extends Component {
  static propTypes = {

  };

  state = {
    isNameValid: true,
    isEmailValid: true,
    isPasswordValid: true,
    isRepeatPasswordValid: true,
  }

  validate = (e) => {
    e.preventDefault();

    const { createAccount } = this.props;

    const name = this.name.value;
    const email = this.email.value;
    const password = this.password.value;
    const repeatedPassword = this.repeatedPassword.value;

    let isFormValid = true;

    if (validateEmpty(name)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false });
      isFormValid = false;
    }

    if (validateEmpty(email)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
      isFormValid = false;
    }

    if (validateEmpty(password)) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
      isFormValid = false;
    }

    if (validateEmpty(repeatedPassword)
        && validateIdentity(password, repeatedPassword)) {
      this.setState({ isRepeatPasswordValid: true });
    } else {
      this.setState({ isRepeatPasswordValid: false });
      isFormValid = false;
    }

    if (isFormValid) {
      createAccount(name, email, password)
        .then(user => browserHistory.push('/'))
        .catch(error => console.log(error));
    } else {
      console.log('Ошибка валидации');
    }
  }

  render () {
    const {
      isEmailValid,
      isNameValid,
      isPasswordValid,
      isRepeatPasswordValid,
    } = this.state;

    return (
      <form onSubmit={ this.validate }>
        <Input
          inputRef={ input => this.name = input }
          isValid={ isNameValid }
          type='text'
          text={ 'Ваше имя' } />
        <Input 
          inputRef={ input => this.email = input }
          isValid={ isEmailValid }
          type='email'
          text='Адрес электронной почты'
        />
        <Input
          inputRef={ input => this.password = input }
          isValid={ isPasswordValid }
          type='password'
          text={ 'Придумайте пароль' } />
        <Input
          inputRef={ input => this.repeatedPassword = input }
          isValid={ isRepeatPasswordValid }
          type='password'
          text={ 'Повторите пароль' }
        />
        <AuthButton onClick={ this.validate } text={ 'Создать аккаунт' }/>
      </form>
    );
  }
}

export default SignUpForm;
