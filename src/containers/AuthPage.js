import React from 'react';
import PropTypes from 'prop-types';
import AuthPage from '../components/AuthPage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginWithGoogle } from '../store/actions/login';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    loginGoogle: loginWithGoogle
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(AuthPage);