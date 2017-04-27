import React from 'react';

const Button = ({className, onClick, inner}) => (
  <button className={className} onClick={onClick}>
    {inner}
  </button>
);

export default Button;
