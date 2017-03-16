import React, {Component} from 'react';
import NavItemContainer from './NavItemContainer';

/*	смена страниц по нажатию таба	*/
export default class Navigation extends Component {
  render() {
    let navItemContainers = this.props.pages.map((item) => {
      return <NavItemContainer
        title={item.title}
        path={item.path}
        className={'navigation__link'}
        activeClassName={'navigation__link_active'}
        key={item.title}/>
    });

    return (
      <div className='navigation'>
        {navItemContainers}
      </div>
    );
  }
}
