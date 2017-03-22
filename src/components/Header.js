import React, {Component} from 'react';
import Auth from './Auth';

export default class Header extends Component {
  render() {
    return (
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
  }
}
