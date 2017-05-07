import React from 'react';
import NavLink from '../NavLink';

import styles from './Navigation.css';

const Navigation = ({pages, flag}) => {
  let navLinks = pages.map((item) => {
    return <NavLink
      flag={flag}
      title={item.title}
      path={item.path}
      key={item.title}/>
    });

    return (
      <div className={styles.navigation}>
        {navLinks}
      </div>
    );
  }
export default Navigation;
