import React from 'react';
import Auth from '../containers/Auth';
import SearchBox from './SearchBox';

const Header = () => (
  <div className='header'>
    <div className='content'>
      <div className='header__group'>
        <div className='logo'>
          <img src='img/logo.svg' className='logo__image' alt='Math starts here'/>
        </div>
        <div className='header__right'>
          <SearchBox/>
          <Auth isLogged={false}/>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
