import React from 'react';
import styles from './Button.css';

const Button = ({onClick, inner}) => (
  <button className="button start-button" onClick={onClick}>
    {inner}
  </button>
);

export default Button;
