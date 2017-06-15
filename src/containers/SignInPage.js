import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/SignInForm';

export default class SignInPage extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  _validate = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <SignInForm onChange={this._change} submit={this._validate} {...this.state}/>
    );
  }

}
