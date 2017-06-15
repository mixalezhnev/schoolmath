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
    isEmailValid: true,
    isPasswordValid: true
  }

  validate = (e) => {
    e.preventDefault();

    const { login } = this.props;

    const email = this.email.value;
    const password = this.password.value;

    let isFormValid = true;

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

    if (isFormValid) {
      login(email, password)
        .then(user => browserHistory.push('/'))
        .catch(error => console.log(error));
    } else {
      console.log('Ошибка валидации');
    }
  }

  render () {
    const {
      isEmailValid,
      isPasswordValid
    } = this.state;

    return (
      <form onSubmit={ this.validate }>
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
          text={ 'Ваш пароль' } />
        <AuthButton onClick={ this.validate } text={ 'Войти' }/>
      </form>
    );
  }
}

export default SignUpForm;
