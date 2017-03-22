import React, {Component} from 'react';

/*	смена страниц по нажатию таба	*/
export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <a className="navigation__link navigation__link_active">Обзор курса</a>
        <a className="navigation__link">Практикум</a>
        <a className="navigation__link">Прогресс</a>
      </div>
    );
  }
}
