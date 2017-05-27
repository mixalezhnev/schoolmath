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
        <section className={styles.completeMessage}>
          <div className={styles.completeIcon}></div>
          <span>Урок завершен!</span>
        </section>
      </div>
    )
  }
}

export default LessonComplete;
