import React from 'react';
import styles from './SearchBox.css';

const SearchBox = ({bordered}) => (
  <div className={styles.searchForm}>
    <input
      type='text'
      className={bordered ? styles.borderedInput : styles.searchInput}
      placeholder={'Поиск'} />
    <div className={styles.searchIcon}></div>
  </div>
);

export default SearchBox;
