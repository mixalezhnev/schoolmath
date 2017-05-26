import React from 'react';

import styles from './TestExercise.css';

const TestExercise = ({ variants }) => (
  <div>
    <ul>
      {variants.map((variant, i) =>
        <li>
          <input type="radio" id={i}/>
          <label htmlFor={i}>{variant}</label>
        </li>
      )}
    </ul>
  </div>
)

export default TestExercise;
