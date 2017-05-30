import React from 'react';

import QuestionExercise from '../../containers/QuestionExercise';
import TestExercise from '../../containers/TestExercise';
import DraggableExercise from '../../containers/DraggableExercise';

import styles from './ExerciseManager.css';

const ExerciseManager = ({ exercise })  => {
  let targetComponent;

  if (exercise) {
    switch(exercise.type) {
      case 'test':
        targetComponent = <TestExercise exercise={exercise} />;
        break;
      case 'text':
        targetComponent = <QuestionExercise exercise={exercise} />;
        break;
      case 'draggable':
        targetComponent = <DraggableExercise exercise={exercise} />;
        break;
      default:
        targetComponent = <QuestionExercise exercise={exercise}/>;
    }
  }
  
  return (
  <div className={styles.container}>
    <p className={styles.question}>{exercise && exercise.question}</p>
    {targetComponent}
  </div>
  );
}

export default ExerciseManager;
