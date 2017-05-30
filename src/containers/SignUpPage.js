import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm';

import { objToArray } from '../ulits';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAccount } from '../store/actions/registration';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createAccount
  }, dispatch)
});

const SignUpPage = ({ createAccount }) => (
  <SignUpForm createAccount={ createAccount } />
)

export default connect(null, mapDispatchToProps)(SignUpForm);