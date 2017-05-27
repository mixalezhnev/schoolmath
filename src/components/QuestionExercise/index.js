import React from 'react';

import styles from './QuestionExercise.css';

const QuestionExercise = ({ exercise, onChange, value, finished, inputRef }) => {
  return(
    <div className={styles.container}>
      {exercise && exercise.preanswer &&
      <span className={styles.preAnswer}>
        {exercise.preanswer}
      </span>}
      <input
        ref={inputRef}
        type='text'
        className={styles.input}
        onChange={onChange}
        value={value}
        disabled={finished}/>
      <span className={styles.postAnswer}>{exercise && exercise.postanswer}</span>
    </div>
    )
}

export default QuestionExercise;
