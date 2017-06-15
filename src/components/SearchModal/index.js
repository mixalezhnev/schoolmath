import React from 'react';

import styles from './SearchModal.css';

const SearchModal = ({ closeModal, state, value, onChange }) => (
  <div className={state ? styles.visible : styles.hidden}>
    <div className={styles.modalDialog}>
      <header className={styles.header}>
        <div className={styles.closeIcon} onClick={closeModal}></div>
      </header>
      <div className={styles.form}>
        <form>
          <label className={styles.searchLabel}>Ищите разделы, уроки и задания</label> 
          <input type="text" placeholder="Поиск" className={styles.input}
                      autoFocus={"autofocus"} value={value} onChange={onChange}/>
        </form>
      </div>
    </div>
  </div>
)

export default SearchModal;
