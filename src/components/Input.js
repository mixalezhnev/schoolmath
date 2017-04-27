import React from 'react';

const Input = ({type, placeholder, handleChange, onClick, className}) => (
    <input
      type = {type === 'search' ? 'text' : type}
      className={className}
      placeholder={placeholder}
      onFocus={handleChange}
    />
);

export default Input;
