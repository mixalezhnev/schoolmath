import React from 'react';
import {Link} from 'react-router';

 const NavItem = ({path, title, className, activeClassName}) => {
  return (
    <Link
      to={path}
      className={className}
      activeClassName={activeClassName}>{title}</Link>
  );
}

export default NavItem;
