import React from 'react';

const Button = (props) => {
  const {className, onClick} = props;

  return (<div className={className} onClick={onClick}></div>
  );
}

export default Button;
