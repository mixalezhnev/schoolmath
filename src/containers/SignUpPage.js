import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAccount } from '../store/actions/registration';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    createAccount
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignUpForm);