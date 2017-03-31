import React, {Component} from 'react';

export default class Auth extends Component {
  render() {
    let fragment;

    if (this.props.isLogged) {
      fragment = <div className="profile">
        <a href="#" className="profile__link">Профиль</a>
      </div>;
    } else {
      fragment = <div className="sign-in">
        <a href="#" className="sign-in__link">Войти</a>
      </div>;
    }

    return fragment;
  }
}
