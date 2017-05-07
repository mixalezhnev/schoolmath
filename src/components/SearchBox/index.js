import React from 'react';
import styles from './SearchBox.css';
import search from './search.svg';

const SearchBox = ({bordered}) => (
  <div className={styles.searchForm}>
    <input
      type='text'
      className={bordered ? styles.inputBordered : styles.searchInput}
      placeholder={'Поиск'} />
    <div className={styles.searchIcon}></div>
  </div>
);

export default SearchBox;
