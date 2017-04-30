import React from 'react';
import NavItem from '../NavLink';

const Navigation = ({pages}) => {
  let navItems = pages.map((item) => {
    return <NavItem
            title={item.title}
            path={item.path}
            className={'navigation__link'}
            activeClassName={'navigation__link_active'}
            key={item.title}/>
    });

    return (
      <div className='navigation'>
        {navItems}
      </div>
    );
  }

export default Navigation;
