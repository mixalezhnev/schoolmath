import React from 'react';
import {Link} from 'react-router';

const NotFound = () => {
  return (
    <div className='main content'>Sorry, I could not find what you want. Please come <Link to='/'>home.</Link></div>
  );
}

export default NotFound;
