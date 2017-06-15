import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../components/SignInForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../store/actions/login';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    login
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignInForm);