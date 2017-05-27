import React from 'react';

import styles from './TestExercise.css';

const TestExercise = ({ variants, finished, onChange, selected }) =>
  (<div>
    <form className={styles.form}>
      {variants.map((variant, i) =>
        <div key={variant} className={styles.possibleAnswer}>
          <label
            className={selected == i ? styles.labelSelected : styles.label}>
            <input
              type="radio"
              className={styles.option}
              value={i}
              checked={selected == i}
              disabled={finished}
              onChange={onChange}
            />{variant}
          </label>
        </div>
      )}
    </form>
  </div>
)

export default TestExercise;
