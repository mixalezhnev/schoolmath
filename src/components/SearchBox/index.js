import React from 'react';

import styles from './SearchBox.css';

const SearchBox = ({ handleClick }) => (
  <a href="#" className={styles.searchTrigger} onClick={handleClick}>
    <span className={styles.searchIcon}></span>
  </a>
);

export default SearchBox;
