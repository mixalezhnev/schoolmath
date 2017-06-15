import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthButton.css';

const AuthButton = ({ text }) => (
  <button className={styles.button}>{text}</button>
);

export default AuthButton;
