import React from 'react';
import {Link} from 'react-router';

export default function NavItem({path, title, className, activeClassName}) {
  return (
    <Link
      to={path}
      className={className}
      activeClassName={activeClassName}>{title}</Link>
  );
}
