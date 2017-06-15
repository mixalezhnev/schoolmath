import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

export default class Input extends Component {
  render() {
    const {
      text,
      type,
      isValid,
      inputRef
    } = this.props;

    return (
      <input
        ref={ inputRef }
        type={type}
        placeholder={text} 
        className={ isValid ? styles.input : styles.invalid }
      />
    )
  }
}
