import React from 'react';

import styles from './SearchBox.css';

const SearchBox = ({bordered}) => (
  <form className={styles.searchForm}>
    <input type='text' placeholder='Поиск'
      className={bordered ? styles.borderedInput  : styles.searchInput}/>
    <button type="submit" className={styles.btn}></button>
  </form>
);

export default SearchBox;
