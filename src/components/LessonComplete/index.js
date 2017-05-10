import React, {Component} from 'react';

import styles from './LessonComplete.css';
// import lessonComplete from './lesson-complete.mp3';
// import completeIcon from './complete.svg';

class LessonComplete extends Component{
  constructor(props) {
    super(props);
    // this.sound = new Audio(lessonComplete);
  }

  render() {
    // this.sound.play();

    return(
      <div className={styles.container}>
        <div className={styles.completeIcon}></div>
        <section className={styles.completeMessage}>
          Урок завершен!
        </section></div>
    )
  }
}

export default LessonComplete;
