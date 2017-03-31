import React from 'react';
import Auth from './Auth';

const Header = () => (
  <div className="header">
    <div className="content">
      <div className="header__group">
        <div className="logo">
          <img src="img/logo.svg" className="logo__image" alt="math starts here"/>
        </div>
        <Auth isLogged={false}/>
      </div>
    </div>
  </div>
);

export default Header;